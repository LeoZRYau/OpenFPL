import Principal "mo:base/Principal";
import Cycles "mo:base/ExperimentalCycles";
import Result "mo:base/Result";
import Blob "mo:base/Blob";
import Trie "mo:base/Trie";
import T "types";
import SHA256 "./SHA256";   

module {

    public class ECDSA() {

        type http_header = {
            name : Text;
            value : Text;
        };

        type http_request_result = {
            status : Nat;
            headers : [http_header];
            body : Blob;
        };
        type IC = actor {
            ecdsa_public_key : ({
                canister_id : ?Principal;
                derivation_path : [Blob];
                key_id : { curve: { #secp256k1; } ; name: Text };
                }) -> async ({ public_key : Blob; chain_code : Blob; });
            sign_with_ecdsa : ({
                message_hash : Blob;
                derivation_path : [Blob];
                key_id : { curve: { #secp256k1; } ; name: Text };
                }) -> async ({ signature : Blob });
            http_request : ({
                url : Text;
                max_response_bytes : ?Nat64;
                method : { #get; #head; #post };
                headers : [http_header];
                body : ?Blob;
                transform : ?{
                    function : ?(shared (response : http_request_result, context : Blob)  -> async (http_request_result));
                    context : Blob;
                };
            }) -> async (http_request_result);
        };
        
        let ic : IC = actor("aaaaa-aa");
            
        type CanisterId = Principal;
        
        type Label = Trie.Trie<Blob,Blob>;
        type EnvelopeContent = {
            #Call : {
                nonce : ?Blob;
                ingress_expiry : Nat64;
                sender : Principal;
                canister_id : Principal;
                method_name : Text;
                arg : Blob;
            };
            #ReadState : {
                ingress_expiry : Nat64;
                sender : Principal;
                paths : [[Label]];
            };
            #Query : {
                ingress_expiry : Nat64;
                sender : Principal;
                canister_id : Principal;
                method_name : Text;
                arg : Blob;
                nonce : ?Blob;
            };
        };

        public func get_key_id(is_local_dev_mode: Bool) : async T.EcdsaKeyId {
            let key_name = if is_local_dev_mode { "dfx_test_key" } else { "key_1" };

            let key: T.EcdsaKeyId = {
                curve = #secp256k1;
                name = key_name;
            };

            return key;
        };

        public func get_public_key(key_id: T.EcdsaKeyId) : async { #Ok : { public_key: Blob }; #Err : Text } {
            try {
                let { public_key } = await ic.ecdsa_public_key({
                    canister_id = null;
                    derivation_path = [ ];
                    key_id = key_id;
                });
                #Ok({ public_key })
            } catch (err) {
                #Err("Error getting public key.")
            }
        };

        //OC Functions:
        
        public func make_canister_call_via_ecdsa(request: T.CanisterEcdsaRequest) : async Result.Result<Text, Text> {
            try{
                let body = await sign_envelope(request.envelope_content, request.public_key, request.key_id);
                switch(body){
                    case (#err body){
                        return #err("Error signing envelope");
                    };
                    case (#ok body){
                        let headers: [http_header] = [{name = "content-type"; value = "application/cbor"}];
                        let maxResponse: Nat64 = 1024 * 1024;
                        let response = await ic.http_request({
                            body = ?body; 
                            headers = headers; 
                            max_response_bytes = ?maxResponse;
                            method = #post;
                            transform = ?{context = Blob.fromArray([]); function = ?fn};
                            url = request.request_url;
                        });
                        if(response.status == 200){
                            return #ok("Canister call made");
                        };
                        return #err("Error making canister call");
                    };
                };
            } catch (error){
                return #err("Error making canister call via ecdsa");
            };
        };

        public shared func fn (result: http_request_result, blob: Blob) : async http_request_result {

        };

        public func sign_envelope(content: EnvelopeContent, public_key: Blob, key_id: T.EcdsaKeyId) : async Result.Result<Blob, Blob> {
            let request_id = to_request_id(content);

            let signature = await sign(key_id, request_id.signable());

            let envelope = T.Envelope {
                content: content;
                sender_pubkey: public_key;
                sender_sig: signature;
            };

            let serialized_bytes = Blob.fromArray([]);
            
            //let serializer:  //Serializer::new(&mut serialized_bytes);
            serializer.self_describe().unwrap();
            //envelope.serialize(&mut serializer).unwrap();
    /*
            info!(
                request_id = String::from(request_id),
                signature = hex::encode(signature),
                "Signed envelope"
            );

            Ok(serialized_bytes)
            */
        };
        
        private func to_request_id(hash: [Nat8]): Blob = Blob.fromArray(hash);

        public shared func sign(key_id: T.EcdsaKeyId, message: Blob) : async Result.Result<Blob, T.Error> {
            try {
                let hasher = SHA256.New();
                hasher.write(Blob.toArray(message));
                let message_hash = Blob.fromArray(hasher.sum([]));
                
                let result = await ic.sign_with_ecdsa({
                    message_hash = message_hash;
                    derivation_path = [ ];
                    key_id = key_id;
                });
                return #ok(result.signature);
            } catch (err) {
                #err(#ECSDAError);
            }
        };
    };
}