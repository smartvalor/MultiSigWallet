var abiJSON = {
  "multiSigDailyLimit": {
    "abi":[{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"owners","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"owner","type":"address"}],"name":"removeOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"transactionId","type":"uint256"}],"name":"revokeConfirmation","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"isOwner","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"},{"name":"","type":"address"}],"name":"confirmations","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"calcMaxWithdraw","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"pending","type":"bool"},{"name":"executed","type":"bool"}],"name":"getTransactionCount","outputs":[{"name":"count","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"dailyLimit","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"lastDay","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"owner","type":"address"}],"name":"addOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"transactionId","type":"uint256"}],"name":"isConfirmed","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"transactionId","type":"uint256"}],"name":"getConfirmationCount","outputs":[{"name":"count","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"transactions","outputs":[{"name":"destination","type":"address"},{"name":"value","type":"uint256"},{"name":"data","type":"bytes"},{"name":"executed","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getOwners","outputs":[{"name":"","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"from","type":"uint256"},{"name":"to","type":"uint256"},{"name":"pending","type":"bool"},{"name":"executed","type":"bool"}],"name":"getTransactionIds","outputs":[{"name":"_transactionIds","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"transactionId","type":"uint256"}],"name":"getConfirmations","outputs":[{"name":"_confirmations","type":"address[]"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"transactionCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_required","type":"uint256"}],"name":"changeRequirement","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"transactionId","type":"uint256"}],"name":"confirmTransaction","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"destination","type":"address"},{"name":"value","type":"uint256"},{"name":"data","type":"bytes"}],"name":"submitTransaction","outputs":[{"name":"transactionId","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_dailyLimit","type":"uint256"}],"name":"changeDailyLimit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"MAX_OWNER_COUNT","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"required","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"owner","type":"address"},{"name":"newOwner","type":"address"}],"name":"replaceOwner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"transactionId","type":"uint256"}],"name":"executeTransaction","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"spentToday","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[{"name":"_owners","type":"address[]"},{"name":"_required","type":"uint256"},{"name":"_dailyLimit","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"dailyLimit","type":"uint256"}],"name":"DailyLimitChange","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"sender","type":"address"},{"indexed":true,"name":"transactionId","type":"uint256"}],"name":"Confirmation","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"sender","type":"address"},{"indexed":true,"name":"transactionId","type":"uint256"}],"name":"Revocation","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"transactionId","type":"uint256"}],"name":"Submission","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"transactionId","type":"uint256"}],"name":"Execution","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"transactionId","type":"uint256"}],"name":"ExecutionFailure","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"sender","type":"address"},{"indexed":false,"name":"value","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"}],"name":"OwnerAddition","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"owner","type":"address"}],"name":"OwnerRemoval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"required","type":"uint256"}],"name":"RequirementChange","type":"event"}],
    "binHex": "0x606060405234156200001057600080fd5b60405162002616380380620026168339810160405280805182019190602001805190602001909190805190602001909190505082826000825182603282111580156200005c5750818111155b80156200006a575060008114155b801562000078575060008214155b15156200008457600080fd5b600092505b8451831015620001bf57600260008685815181101515620000a657fe5b9060200190602002015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16158015620001355750600085848151811015156200011257fe5b9060200190602002015173ffffffffffffffffffffffffffffffffffffffff1614155b15156200014157600080fd5b60016002600087868151811015156200015657fe5b9060200190602002015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550828060010193505062000089565b8460039080519060200190620001d7929190620001f4565b5083600481905550505050505080600681905550505050620002c9565b82805482825590600052602060002090810192821562000270579160200282015b828111156200026f5782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055509160200191906001019062000215565b5b5090506200027f919062000283565b5090565b620002c691905b80821115620002c257600081816101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055506001016200028a565b5090565b90565b61233d80620002d96000396000f300606060405260043610610154576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063025e7c27146101ae578063173825d91461021157806320ea8d861461024a5780632f54bf6e1461026d5780633411c81c146102be5780634bc9fdc214610318578063547415251461034157806367eeba0c146103855780636b0c932d146103ae5780637065cb48146103d7578063784547a7146104105780638b51d13f1461044b5780639ace38c214610482578063a0e67e2b14610580578063a8abe69a146105ea578063b5dc40c314610681578063b77bf600146106f9578063ba51a6df14610722578063c01a8c8414610745578063c642747414610768578063cea0862114610801578063d74f8edd14610824578063dc8452cd1461084d578063e20056e614610876578063ee22610b146108ce578063f059cf2b146108f1575b60003411156101ac573373ffffffffffffffffffffffffffffffffffffffff167fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c346040518082815260200191505060405180910390a25b005b34156101b957600080fd5b6101cf600480803590602001909190505061091a565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b341561021c57600080fd5b610248600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610959565b005b341561025557600080fd5b61026b6004808035906020019091905050610bf5565b005b341561027857600080fd5b6102a4600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610d9d565b604051808215151515815260200191505060405180910390f35b34156102c957600080fd5b6102fe600480803590602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610dbd565b604051808215151515815260200191505060405180910390f35b341561032357600080fd5b61032b610dec565b6040518082815260200191505060405180910390f35b341561034c57600080fd5b61036f600480803515159060200190919080351515906020019091905050610e29565b6040518082815260200191505060405180910390f35b341561039057600080fd5b610398610ebb565b6040518082815260200191505060405180910390f35b34156103b957600080fd5b6103c1610ec1565b6040518082815260200191505060405180910390f35b34156103e257600080fd5b61040e600480803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050610ec7565b005b341561041b57600080fd5b61043160048080359060200190919050506110c9565b604051808215151515815260200191505060405180910390f35b341561045657600080fd5b61046c60048080359060200190919050506111af565b6040518082815260200191505060405180910390f35b341561048d57600080fd5b6104a3600480803590602001909190505061127b565b604051808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001848152602001806020018315151515815260200182810382528481815460018160011615610100020316600290048152602001915080546001816001161561010002031660029004801561056e5780601f106105435761010080835404028352916020019161056e565b820191906000526020600020905b81548152906001019060200180831161055157829003601f168201915b50509550505050505060405180910390f35b341561058b57600080fd5b6105936112d7565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156105d65780820151818401526020810190506105bb565b505050509050019250505060405180910390f35b34156105f557600080fd5b61062a60048080359060200190919080359060200190919080351515906020019091908035151590602001909190505061136b565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561066d578082015181840152602081019050610652565b505050509050019250505060405180910390f35b341561068c57600080fd5b6106a260048080359060200190919050506114c7565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156106e55780820151818401526020810190506106ca565b505050509050019250505060405180910390f35b341561070457600080fd5b61070c6116f1565b6040518082815260200191505060405180910390f35b341561072d57600080fd5b61074360048080359060200190919050506116f7565b005b341561075057600080fd5b61076660048080359060200190919050506117b1565b005b341561077357600080fd5b6107eb600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803590602001909190803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190505061198e565b6040518082815260200191505060405180910390f35b341561080c57600080fd5b61082260048080359060200190919050506119ad565b005b341561082f57600080fd5b610837611a28565b6040518082815260200191505060405180910390f35b341561085857600080fd5b610860611a2d565b6040518082815260200191505060405180910390f35b341561088157600080fd5b6108cc600480803573ffffffffffffffffffffffffffffffffffffffff1690602001909190803573ffffffffffffffffffffffffffffffffffffffff16906020019091905050611a33565b005b34156108d957600080fd5b6108ef6004808035906020019091905050611d4a565b005b34156108fc57600080fd5b610904612042565b6040518082815260200191505060405180910390f35b60038181548110151561092957fe5b90600052602060002090016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60003073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561099557600080fd5b81600260008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615156109ee57600080fd5b6000600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550600091505b600160038054905003821015610b76578273ffffffffffffffffffffffffffffffffffffffff16600383815481101515610a8157fe5b906000526020600020900160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610b69576003600160038054905003815481101515610ae057fe5b906000526020600020900160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600383815481101515610b1b57fe5b906000526020600020900160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550610b76565b8180600101925050610a4b565b6001600381818054905003915081610b8e91906121ec565b506003805490506004541115610bad57610bac6003805490506116f7565b5b8273ffffffffffffffffffffffffffffffffffffffff167f8001553a916ef2f495d26a907cc54d96ed840d7bda71e73194bf5a9df7a76b9060405160405180910390a2505050565b33600260008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515610c4e57600080fd5b81336001600083815260200190815260200160002060008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515610cb957600080fd5b8360008082815260200190815260200160002060030160009054906101000a900460ff16151515610ce957600080fd5b60006001600087815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550843373ffffffffffffffffffffffffffffffffffffffff167ff6a317157440607f36269043eb55f1287a5a19ba2216afeab88cd46cbcfb88e960405160405180910390a35050505050565b60026020528060005260406000206000915054906101000a900460ff1681565b60016020528160005260406000206020528060005260406000206000915091509054906101000a900460ff1681565b60006201518060075401421115610e07576006549050610e26565b6008546006541015610e1c5760009050610e26565b6008546006540390505b90565b600080600090505b600554811015610eb457838015610e68575060008082815260200190815260200160002060030160009054906101000a900460ff16155b80610e9b5750828015610e9a575060008082815260200190815260200160002060030160009054906101000a900460ff165b5b15610ea7576001820191505b8080600101915050610e31565b5092915050565b60065481565b60075481565b3073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610f0157600080fd5b80600260008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151515610f5b57600080fd5b8160008173ffffffffffffffffffffffffffffffffffffffff1614151515610f8257600080fd5b60016003805490500160045460328211158015610f9f5750818111155b8015610fac575060008114155b8015610fb9575060008214155b1515610fc457600080fd5b6001600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550600380548060010182816110309190612218565b9160005260206000209001600087909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550508473ffffffffffffffffffffffffffffffffffffffff167ff39e6e1eb0edcf53c221607b54b00cd28f3196fed0a24994dc308b8f611b682d60405160405180910390a25050505050565b6000806000809150600090505b6003805490508110156111a75760016000858152602001908152602001600020600060038381548110151561110757fe5b906000526020600020900160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615611187576001820191505b60045482141561119a57600192506111a8565b80806001019150506110d6565b5b5050919050565b600080600090505b600380549050811015611275576001600084815260200190815260200160002060006003838154811015156111e857fe5b906000526020600020900160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615611268576001820191505b80806001019150506111b7565b50919050565b60006020528060005260406000206000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169080600101549080600201908060030160009054906101000a900460ff16905084565b6112df612244565b600380548060200260200160405190810160405280929190818152602001828054801561136157602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311611317575b5050505050905090565b611373612258565b61137b612258565b60008060055460405180591061138e5750595b9080825280602002602001820160405250925060009150600090505b60055481101561144a578580156113e1575060008082815260200190815260200160002060030160009054906101000a900460ff16155b806114145750848015611413575060008082815260200190815260200160002060030160009054906101000a900460ff165b5b1561143d5780838381518110151561142857fe5b90602001906020020181815250506001820191505b80806001019150506113aa565b87870360405180591061145a5750595b908082528060200260200182016040525093508790505b868110156114bc57828181518110151561148757fe5b90602001906020020151848983038151811015156114a157fe5b90602001906020020181815250508080600101915050611471565b505050949350505050565b6114cf612244565b6114d7612244565b6000806003805490506040518059106114ed5750595b9080825280602002602001820160405250925060009150600090505b60038054905081101561164c5760016000868152602001908152602001600020600060038381548110151561153a57fe5b906000526020600020900160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161561163f576003818154811015156115c257fe5b906000526020600020900160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1683838151811015156115fc57fe5b9060200190602002019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250506001820191505b8080600101915050611509565b8160405180591061165a5750595b90808252806020026020018201604052509350600090505b818110156116e957828181518110151561168857fe5b9060200190602002015184828151811015156116a057fe5b9060200190602002019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff16815250508080600101915050611672565b505050919050565b60055481565b3073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561173157600080fd5b60038054905081603282111580156117495750818111155b8015611756575060008114155b8015611763575060008214155b151561176e57600080fd5b826004819055507fa3f1ee9126a074d9326c682f561767f710e927faa811f7a99829d49dc421797a836040518082815260200191505060405180910390a1505050565b33600260008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151561180a57600080fd5b81600080600083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415151561186657600080fd5b82336001600083815260200190815260200160002060008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515156118d257600080fd5b600180600087815260200190815260200160002060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550843373ffffffffffffffffffffffffffffffffffffffff167f4a504a94899432a9846e1aa406dceb1bcfd538bb839071d49d1e5e23f5be30ef60405160405180910390a361198785611d4a565b5050505050565b600061199b848484612048565b90506119a6816117b1565b9392505050565b3073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156119e757600080fd5b806006819055507fc71bdc6afaf9b1aa90a7078191d4fc1adf3bf680fca3183697df6b0dc226bca2816040518082815260200191505060405180910390a150565b603281565b60045481565b60003073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515611a6f57600080fd5b82600260008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515611ac857600080fd5b82600260008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16151515611b2257600080fd5b600092505b600380549050831015611c0d578473ffffffffffffffffffffffffffffffffffffffff16600384815481101515611b5a57fe5b906000526020600020900160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415611c005783600384815481101515611bb257fe5b906000526020600020900160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550611c0d565b8280600101935050611b27565b6000600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055506001600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508473ffffffffffffffffffffffffffffffffffffffff167f8001553a916ef2f495d26a907cc54d96ed840d7bda71e73194bf5a9df7a76b9060405160405180910390a28373ffffffffffffffffffffffffffffffffffffffff167ff39e6e1eb0edcf53c221607b54b00cd28f3196fed0a24994dc308b8f611b682d60405160405180910390a25050505050565b60008033600260008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515611da657600080fd5b83336001600083815260200190815260200160002060008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff161515611e1157600080fd5b8560008082815260200190815260200160002060030160009054906101000a900460ff16151515611e4157600080fd5b6000808881526020019081526020016000209550611e5e876110c9565b94508480611e995750600086600201805460018160011615610100020316600290049050148015611e985750611e97866001015461219a565b5b5b156120395760018660030160006101000a81548160ff021916908315150217905550841515611ed75785600101546008600082825401925050819055505b8560000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168660010154876002016040518082805460018160011615610100020316600290048015611f805780601f10611f5557610100808354040283529160200191611f80565b820191906000526020600020905b815481529060010190602001808311611f6357829003601f168201915b505091505060006040518083038185876187965a03f19250505015611fd157867f33e13ecb54c3076d8e8bb8c2881800a4d972b792045ffae98fdf46df365fed7560405160405180910390a2612038565b867f526441bb6c1aba3c9a4a6ca1d6545da9c2333c8c48343ef398eb858d72b7923660405160405180910390a260008660030160006101000a81548160ff0219169083151502179055508415156120375785600101546008600082825403925050819055505b5b5b50505050505050565b60085481565b60008360008173ffffffffffffffffffffffffffffffffffffffff161415151561207157600080fd5b60055491506080604051908101604052808673ffffffffffffffffffffffffffffffffffffffff1681526020018581526020018481526020016000151581525060008084815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010155604082015181600201908051906020019061213092919061226c565b5060608201518160030160006101000a81548160ff0219169083151502179055509050506001600560008282540192505081905550817fc0ba8fe4b176c1714197d43b9cc6bcf797a4a7461c5fe8d0ef6e184ae7601e5160405160405180910390a2509392505050565b600062015180600754014211156121bb574260078190555060006008819055505b600654826008540111806121d457506008548260085401105b156121e257600090506121e7565b600190505b919050565b8154818355818115116122135781836000526020600020918201910161221291906122ec565b5b505050565b81548183558181151161223f5781836000526020600020918201910161223e91906122ec565b5b505050565b602060405190810160405280600081525090565b602060405190810160405280600081525090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106122ad57805160ff19168380011785556122db565b828001600101855582156122db579182015b828111156122da5782518255916020019190600101906122bf565b5b5090506122e891906122ec565b5090565b61230e91905b8082111561230a5760008160009055506001016122f2565b5090565b905600a165627a7a723058207a083fc9111b1e743b3e6a8a4011c2a704783380ac0246f4e7140573c449e3ee0029"
  },
  "token": {
    "abi": [{"inputs": [], "constant": true, "name": "name", "payable": false, "outputs": [{"type": "string", "name": ""}], "type": "function"}, {"inputs": [{"type": "address", "name": "spender"}, {"type": "uint256", "name": "value"}], "constant": false, "name": "approve", "payable": false, "outputs": [{"type": "bool", "name": "success"}], "type": "function"}, {"inputs": [], "constant": true, "name": "totalSupply", "payable": false, "outputs": [{"type": "uint256", "name": "supply"}], "type": "function"}, {"inputs": [{"type": "address", "name": "from"}, {"type": "address", "name": "to"}, {"type": "uint256", "name": "value"}], "constant": false, "name": "transferFrom", "payable": false, "outputs": [{"type": "bool", "name": "success"}], "type": "function"}, {"inputs": [], "constant": true, "name": "decimals", "payable": false, "outputs": [{"type": "uint8", "name": ""}], "type": "function"}, {"inputs": [{"type": "address", "name": "owner"}], "constant": true, "name": "balanceOf", "payable": false, "outputs": [{"type": "uint256", "name": "balance"}], "type": "function"}, {"inputs": [], "constant": true, "name": "symbol", "payable": false, "outputs": [{"type": "string", "name": ""}], "type": "function"}, {"inputs": [{"type": "address", "name": "to"}, {"type": "uint256", "name": "value"}], "constant": false, "name": "transfer", "payable": false, "outputs": [{"type": "bool", "name": "success"}], "type": "function"}, {"inputs": [{"type": "address", "name": "owner"}, {"type": "address", "name": "spender"}], "constant": true, "name": "allowance", "payable": false, "outputs": [{"type": "uint256", "name": "remaining"}], "type": "function"}, {"inputs": [{"indexed": true, "type": "address", "name": "from"}, {"indexed": true, "type": "address", "name": "to"}, {"indexed": false, "type": "uint256", "name": "value"}], "type": "event", "name": "Transfer", "anonymous": false}, {"inputs": [{"indexed": true, "type": "address", "name": "owner"}, {"indexed": true, "type": "address", "name": "spender"}, {"indexed": false, "type": "uint256", "name": "value"}], "type": "event", "name": "Approval", "anonymous": false}]
  },
  "multiSigDailyLimitFactory" : {
    "abi": [{"inputs": [{"type": "address", "name": ""}], "constant": true, "name": "isInstantiation", "payable": false, "outputs": [{"type": "bool", "name": ""}], "type": "function"}, {"inputs": [{"type": "address[]", "name": "_owners"}, {"type": "uint256", "name": "_required"}, {"type": "uint256", "name": "_dailyLimit"}], "constant": false, "name": "create", "payable": false, "outputs": [{"type": "address", "name": "wallet"}], "type": "function"}, {"inputs": [{"type": "address", "name": ""}, {"type": "uint256", "name": ""}], "constant": true, "name": "instantiations", "payable": false, "outputs": [{"type": "address", "name": ""}], "type": "function"}, {"inputs": [{"type": "address", "name": "creator"}], "constant": true, "name": "getInstantiationCount", "payable": false, "outputs": [{"type": "uint256", "name": ""}], "type": "function"}, {"inputs": [{"indexed": false, "type": "address", "name": "sender"}, {"indexed": false, "type": "address", "name": "instantiation"}], "type": "event", "name": "ContractInstantiation", "anonymous": false}]
  },
  "burnableToken":{
  	"abi":[
    {
      "constant": false,
      "inputs": [
        {
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "burn",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_subtractedValue",
          "type": "uint256"
        }
      ],
      "name": "decreaseApproval",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_to",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_spender",
          "type": "address"
        },
        {
          "name": "_addedValue",
          "type": "uint256"
        }
      ],
      "name": "increaseApproval",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_owner",
          "type": "address"
        },
        {
          "name": "_spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "burner",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Burn",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_from",
          "type": "address"
        },
        {
          "name": "_value",
          "type": "uint256"
        }
      ],
      "name": "burnFrom",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ] 
  }
};
