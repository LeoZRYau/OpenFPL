module DTOs {
    
    public type ProfileDTO = {
        principalName: Text;
        icpDepositAddress: Blob;
        fplDepositAddress: Blob;
        displayName: Text;
        membershipType: Nat8;
        profilePicture: Blob;
        favouriteTeamId: Nat16;
        createDate: Int;
    };

    public type AccountBalanceDTO = {
        icpBalance: Nat64;
        fplBalance: Nat64;
    };
    
}
