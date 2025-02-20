#!/bin/bash

# Set current directory to the directory this script is in
SCRIPT=$(readlink -f "$0")
SCRIPT_DIR=$(dirname "$SCRIPT")
cd $SCRIPT_DIR

# Call the function to configure the neuron that has just been created

echo "Transfer to ICP Swap"

PROPOSAL="(
    record {  
        title = \"Transfer 1,000,000 FPL to FPL/ICP pool on ICPSwap\";  
        url = \"https://nns.ic0.app/proposal/?u=gyito-zyaaa-aaaaq-aacpq-cai&proposal=25\";  
        summary = \"
            This is the second of 2 proposals which add liquidity to the FPL/ICP pool on ICPSwap.
            
            https://info.icpswap.com/swap/pool/details/yco2w-2iaaa-aaaag-qjqoa-cai

            See this motion proposal for full details.
            https://nns.ic0.app/proposal/?u=gyito-zyaaa-aaaaq-aacpq-cai&proposal=25
        \";
        action = opt variant {  
            TransferSnsTreasuryFunds = record {  
                TO_PRINCIPAL="opt principal \"yco2w-2iaaa-aaaag-qjqoa-cai\""
                TO_SUBACCOUNT="opt record { subaccount=vec { 10: nat8; 0: nat8; 0: nat8; 0: nat8; 0: nat8; 2: nat8; 0: nat8; 0: nat8; 160: nat8; 1: nat8; 1: nat8; 0: nat8; 0: nat8; 0: nat8; 0: nat8; 0: nat8; 0: nat8; 0: nat8; 0: nat8; 0: nat8; 0: nat8; 0: nat8; 0: nat8; 0: nat8; 0: nat8; 0: nat8; 0: nat8; 0: nat8; 0: nat8; 0: nat8; 0: nat8; 0: nat8 }}"
                AMOUNT="100000000000000"
                FROM_TREASURY="2"
            }  
        };  
    })"

../utils/submit_proposal.sh "$PROPOSAL"

#On completion use OpenFPL Backend to obtain neuron id