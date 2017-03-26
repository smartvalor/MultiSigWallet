var abiJSON = {
  "multiSigDailyLimit": {
    "abi": [{"inputs": [{"type": "uint256", "name": ""}], "constant": true, "name": "owners", "payable": false, "outputs": [{"type": "address", "name": ""}], "type": "function"}, {"inputs": [{"type": "address", "name": "owner"}], "constant": false, "name": "removeOwner", "payable": false, "outputs": [], "type": "function"}, {"inputs": [{"type": "uint256", "name": "transactionId"}], "constant": false, "name": "revokeConfirmation", "payable": false, "outputs": [], "type": "function"}, {"inputs": [{"type": "address", "name": ""}], "constant": true, "name": "isOwner", "payable": false, "outputs": [{"type": "bool", "name": ""}], "type": "function"}, {"inputs": [{"type": "uint256", "name": ""}, {"type": "address", "name": ""}], "constant": true, "name": "confirmations", "payable": false, "outputs": [{"type": "bool", "name": ""}], "type": "function"}, {"inputs": [], "constant": true, "name": "calcMaxWithdraw", "payable": false, "outputs": [{"type": "uint256", "name": ""}], "type": "function"}, {"inputs": [{"type": "bool", "name": "pending"}, {"type": "bool", "name": "executed"}], "constant": true, "name": "getTransactionCount", "payable": false, "outputs": [{"type": "uint256", "name": "count"}], "type": "function"}, {"inputs": [], "constant": true, "name": "dailyLimit", "payable": false, "outputs": [{"type": "uint256", "name": ""}], "type": "function"}, {"inputs": [], "constant": true, "name": "lastDay", "payable": false, "outputs": [{"type": "uint256", "name": ""}], "type": "function"}, {"inputs": [{"type": "address", "name": "owner"}], "constant": false, "name": "addOwner", "payable": false, "outputs": [], "type": "function"}, {"inputs": [{"type": "uint256", "name": "transactionId"}], "constant": true, "name": "isConfirmed", "payable": false, "outputs": [{"type": "bool", "name": ""}], "type": "function"}, {"inputs": [{"type": "uint256", "name": "transactionId"}], "constant": true, "name": "getConfirmationCount", "payable": false, "outputs": [{"type": "uint256", "name": "count"}], "type": "function"}, {"inputs": [{"type": "uint256", "name": ""}], "constant": true, "name": "transactions", "payable": false, "outputs": [{"type": "address", "name": "destination"}, {"type": "uint256", "name": "value"}, {"type": "bytes", "name": "data"}, {"type": "bool", "name": "executed"}], "type": "function"}, {"inputs": [], "constant": true, "name": "getOwners", "payable": false, "outputs": [{"type": "address[]", "name": ""}], "type": "function"}, {"inputs": [{"type": "uint256", "name": "from"}, {"type": "uint256", "name": "to"}, {"type": "bool", "name": "pending"}, {"type": "bool", "name": "executed"}], "constant": true, "name": "getTransactionIds", "payable": false, "outputs": [{"type": "uint256[]", "name": "_transactionIds"}], "type": "function"}, {"inputs": [{"type": "uint256", "name": "transactionId"}], "constant": true, "name": "getConfirmations", "payable": false, "outputs": [{"type": "address[]", "name": "_confirmations"}], "type": "function"}, {"inputs": [], "constant": true, "name": "transactionCount", "payable": false, "outputs": [{"type": "uint256", "name": ""}], "type": "function"}, {"inputs": [{"type": "uint256", "name": "_required"}], "constant": false, "name": "changeRequirement", "payable": false, "outputs": [], "type": "function"}, {"inputs": [{"type": "uint256", "name": "transactionId"}], "constant": false, "name": "confirmTransaction", "payable": false, "outputs": [], "type": "function"}, {"inputs": [{"type": "address", "name": "destination"}, {"type": "uint256", "name": "value"}, {"type": "bytes", "name": "data"}], "constant": false, "name": "submitTransaction", "payable": false, "outputs": [{"type": "uint256", "name": "transactionId"}], "type": "function"}, {"inputs": [{"type": "uint256", "name": "_dailyLimit"}], "constant": false, "name": "changeDailyLimit", "payable": false, "outputs": [], "type": "function"}, {"inputs": [], "constant": true, "name": "MAX_OWNER_COUNT", "payable": false, "outputs": [{"type": "uint256", "name": ""}], "type": "function"}, {"inputs": [], "constant": true, "name": "required", "payable": false, "outputs": [{"type": "uint256", "name": ""}], "type": "function"}, {"inputs": [{"type": "address", "name": "owner"}, {"type": "address", "name": "newOwner"}], "constant": false, "name": "replaceOwner", "payable": false, "outputs": [], "type": "function"}, {"inputs": [{"type": "uint256", "name": "transactionId"}], "constant": false, "name": "executeTransaction", "payable": false, "outputs": [], "type": "function"}, {"inputs": [], "constant": true, "name": "spentToday", "payable": false, "outputs": [{"type": "uint256", "name": ""}], "type": "function"}, {"inputs": [{"type": "address[]", "name": "_owners"}, {"type": "uint256", "name": "_required"}, {"type": "uint256", "name": "_dailyLimit"}], "type": "constructor"}, {"payable": true, "type": "fallback"}, {"inputs": [{"indexed": false, "type": "uint256", "name": "dailyLimit"}], "type": "event", "name": "DailyLimitChange", "anonymous": false}, {"inputs": [{"indexed": true, "type": "address", "name": "sender"}, {"indexed": true, "type": "uint256", "name": "transactionId"}], "type": "event", "name": "Confirmation", "anonymous": false}, {"inputs": [{"indexed": true, "type": "address", "name": "sender"}, {"indexed": true, "type": "uint256", "name": "transactionId"}], "type": "event", "name": "Revocation", "anonymous": false}, {"inputs": [{"indexed": true, "type": "uint256", "name": "transactionId"}], "type": "event", "name": "Submission", "anonymous": false}, {"inputs": [{"indexed": true, "type": "uint256", "name": "transactionId"}], "type": "event", "name": "Execution", "anonymous": false}, {"inputs": [{"indexed": true, "type": "uint256", "name": "transactionId"}], "type": "event", "name": "ExecutionFailure", "anonymous": false}, {"inputs": [{"indexed": true, "type": "address", "name": "sender"}, {"indexed": false, "type": "uint256", "name": "value"}], "type": "event", "name": "Deposit", "anonymous": false}, {"inputs": [{"indexed": true, "type": "address", "name": "owner"}], "type": "event", "name": "OwnerAddition", "anonymous": false}, {"inputs": [{"indexed": true, "type": "address", "name": "owner"}], "type": "event", "name": "OwnerRemoval", "anonymous": false}, {"inputs": [{"indexed": false, "type": "uint256", "name": "required"}], "type": "event", "name": "RequirementChange", "anonymous": false}],
    "binHex": "0x606060405260405161164438038061164483398101604052805160805160a05191909201919082826000825182603282118061003a57508181115b80610043575080155b8061004c575081155b1561005657610002565b600092505b84518310156100ce576002600050600086858151811015610002576020908102909101810151600160a060020a031682528101919091526040016000205460ff16806100c45750848381518110156100025790602001906020020151600160a060020a03166000145b1561015357610002565b845160038054828255600082905290917fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b918201916020890182156101cd579160200282015b828111156101cd5782518254600160a060020a0319166c0100000000000000000000000091820291909104178255602090920191600190910190610114565b600160026000506000878681518110156100025790602001906020020151600160a060020a0316815260200190815260200160002060006101000a81548160ff02191690837f010000000000000000000000000000000000000000000000000000000000000090810204021790555060019092019161005b565b506101f39291505b80821115610213578054600160a060020a03191681556001016101d5565b5050506004929092555050506006555061142d9050806102176000396000f35b509056606060405236156101325760e060020a6000350463025e7c278114610180578063173825d9146101b257806320ea8d86146101df5780632f54bf6e146102135780633411c81c146102335780634bc9fdc214610260578063547415251461028357806367eeba0c146102f75780636b0c932d146103055780637065cb4814610313578063784547a71461033e5780638b51d13f1461034e5780639ace38c2146103c2578063a0e67e2b146103fd578063a8abe69a1461046e578063b5dc40c31461054d578063b77bf60014610659578063ba51a6df14610667578063c01a8c8414610693578063c6427474146106a3578063cea0862114610714578063d74f8edd1461073f578063dc8452cd1461074c578063e20056e61461075a578063ee22610b1461078a578063f059cf2b1461079a575b6107a8600034111561017e57604080513481529051600160a060020a033316917fe1fffcc4923d04b559f4d29a8bfc6cda04eb5b0d3c460751c2402c5c5cc9109c919081900360200190a25b565b34610002576107aa60043560038054829081101561000257600091825260209091200154600160a060020a0316905081565b34610002576107a8600435600030600160a060020a031633600160a060020a0316141515610a1a57610002565b34610002576107a8600435600160a060020a033390811660009081526002602052604090205460ff161515610c5f57610002565b34610002576107c660043560026020526000908152604090205460ff1681565b34610002576001602090815260043560009081526040808220909252602435815220546107c69060ff1681565b34610002576107da6007546000906201518001421115610d1b5750600654610d18565b34610002576107da6004356024356000805b600554811015610d2f578380156102be575060008181526020819052604090206003015460ff16155b806102e257508280156102e2575060008181526020819052604090206003015460ff165b156102ef57600191909101905b600101610295565b34610002576107da60065481565b34610002576107da60075481565b34610002576107a860043530600160a060020a031633600160a060020a0316141515610d3657610002565b34610002576107c6600435610801565b34610002576107da6004356000805b600354811015610e66576000838152600160205260408120600380549192918490811015610002576000918252602080832090910154600160a060020a0316835282019290925260400190205460ff16156103ba57600191909101905b60010161035d565b34610002576000602081905260043581526040902080546001820154600383015461087993600160a060020a03909316926002019060ff1684565b346100025760408051602080820183526000825260038054845181840281018401909552808552610923949283018282801561046257602002820191906000526020600020905b8154600160a060020a03168152600190910190602001808311610444575b50505050509050610d18565b34610002576109236004356024356044356064356040805160208181018352600080835283519182018452808252600554935192939192909182918059106104b35750595b9080825280602002602001820160405280156104ca575b509250600091508190505b600554811015610e6c578580156104fe575060008181526020819052604090206003015460ff16155b806105225750848015610522575060008181526020819052604090206003015460ff165b156105455780838381518110156100025760209081029091010152600191909101905b6001016104d5565b34610002576109236004356040805160208181018352600080835283519182018452808252600354935192939192909182918059106105895750595b9080825280602002602001820160405280156105a0575b509250600091508190505b600354811015610ee1576000858152600160205260408120600380549192918490811015610002576000918252602080832090910154600160a060020a0316835282019290925260400190205460ff161561065157600380548290811015610002576000918252602090912001548351600160a060020a03909116908490849081101561000257600160a060020a03909216602092830290910190910152600191909101905b6001016105ab565b34610002576107da60055481565b34610002576107a86004355b30600160a060020a031633600160a060020a0316141515610f5d57610002565b34610002576107a8600435610974565b3461000257604080516020600460443581810135601f81018490048402850184019095528484526107da948235946024803595606494929391909201918190840183828082843750949650505050505050600061096d848484600083600160a060020a0381161515610b6157610002565b34610002576107a860043530600160a060020a031633600160a060020a031614151561102857610002565b34610002576107da603281565b34610002576107da60045481565b34610002576107a8600435602435600030600160a060020a031633600160a060020a031614151561106357610002565b34610002576107a86004356109f7565b34610002576107da60085481565b005b60408051600160a060020a039092168252519081900360200190f35b604080519115158252519081900360200190f35b60408051918252519081900360200190f35b600084815260208190526040902092506111d6845b600080805b600354811015610872576000848152600160205260408120600380549192918490811015610002576000918252602080832090910154600160a060020a0316835282019290925260400190205460ff161561086357600191909101905b600454821415610e5e57600192505b5050919050565b60408051600160a060020a03861681526020810185905282151560608201526080918101828152845460026000196101006001841615020190911604928201839052909160a0830190859080156109115780601f106108e657610100808354040283529160200191610911565b820191906000526020600020905b8154815290600101906020018083116108f457829003601f168201915b50509550505050505060405180910390f35b60405180806020018281038252838181518152602001915080519060200190602002808383829060006004602084601f0104600302600f01f1509050019250505060405180910390f35b9050611021815b33600160a060020a03811660009081526002602052604090205460ff161515610fc857610002565b6000858152600160208181526040808420600160a060020a0333168086529252808420805460ff1916909317909255905187927f4a504a94899432a9846e1aa406dceb1bcfd538bb839071d49d1e5e23f5be30ef91a3610ce6855b6000818152602081905260408120600301548190839060ff16156107ec57610002565b600160a060020a038216600090815260026020526040902054829060ff161515610a4357610002565b600160a060020a0383166000908152600260205260408120805460ff1916905591505b60035460001901821015610b085782600160a060020a0316600360005083815481101561000257600091825260209091200154600160a060020a03161415610b3857600380546000198101908110156100025760009182526020909120015460038054600160a060020a039092169184908110156100025760009182526020909120018054600160a060020a031916606060020a928302929092049190911790555b600380546000198101808355919082908015829011610b4357600083815260209020610b43918101908301610c0e565b600190910190610a66565b505060035460045411159150610c26905057600354610c2690610673565b60055460408051608081018252878152602080820188815282840188815260006060850181905286815280845294852084518154606060020a91820291909104600160a060020a031990911617815591516001808401919091559051805160028085018054818a5298879020999b5096989497601f9481161561010002600019011604830185900484019490939291019083901061139257805160ff19168380011785555b506113c29291505b80821115610c225760008155600101610c0e565b5090565b604051600160a060020a038416907f8001553a916ef2f495d26a907cc54d96ed840d7bda71e73194bf5a9df7a76b9090600090a2505050565b600082815260016020908152604080832033600160a060020a038116855292529091205483919060ff161515610cee57610002565b6000858152600160209081526040808320600160a060020a0333168085529252808320805460ff191690555187927ff6a317157440607f36269043eb55f1287a5a19ba2216afeab88cd46cbcfb88e991a35b505b50505050565b600084815260208190526040902060030154849060ff1615610c9457610002565b50600854600654035b90565b6008546006541015610d0f57506000610d18565b5092915050565b600160a060020a038116600090815260026020526040902054819060ff1615610d5e57610002565b81600160a060020a0381161515610d7457610002565b6003546004546001909101906032821180610d8e57508181115b80610d97575080155b80610da0575081155b15610daa57610002565b600160a060020a0385166000908152600260205260409020805460ff19166001908117909155600380549182018082559091908281838015829011610e0057600083815260209020610e00918101908301610c0e565b50505060009283525060208220018054600160a060020a031916606060020a88810204179055604051600160a060020a038716917ff39e6e1eb0edcf53c221607b54b00cd28f3196fed0a24994dc308b8f611b682d91a25050505050565b600101610806565b50919050565b878703604051805910610e7c5750595b908082528060200260200182016040528015610e93575b5093508790505b86811015610ed6578281815181101561000257906020019060200201518489830381518110156100025760209081029091010152600101610e9a565b505050949350505050565b81604051805910610eef5750595b908082528060200260200182016040528015610f06575b509350600090505b81811015610f55578281815181101561000257906020019060200201518482815181101561000257600160a060020a03909216602092830290910190910152600101610f0e565b505050919050565b600354816032821180610f6f57508181115b80610f78575080155b80610f81575081155b15610f8b57610002565b60048390556040805184815290517fa3f1ee9126a074d9326c682f561767f710e927faa811f7a99829d49dc421797a9181900360200190a1505050565b6000828152602081905260409020548290600160a060020a03161515610fed57610002565b600083815260016020908152604080832033600160a060020a038116855292529091205484919060ff161561099c57610002565b9392505050565b60068190556040805182815290517fc71bdc6afaf9b1aa90a7078191d4fc1adf3bf680fca3183697df6b0dc226bca29181900360200190a150565b600160a060020a038316600090815260026020526040902054839060ff16151561108c57610002565b600160a060020a038316600090815260026020526040902054839060ff16156110b457610002565b600092505b6003548310156111315784600160a060020a0316600360005084815481101561000257600091825260209091200154600160a060020a031614156111cb578360036000508481548110156100025760009182526020909120018054600160a060020a031916606060020a928302929092049190911790555b600160a060020a03808616600081815260026020526040808220805460ff1990811690915593881682528082208054909416600117909355915190917f8001553a916ef2f495d26a907cc54d96ed840d7bda71e73194bf5a9df7a76b9091a2604051600160a060020a038516907ff39e6e1eb0edcf53c221607b54b00cd28f3196fed0a24994dc308b8f611b682d90600090a25050505050565b6001909201916110b9565b91508180611245575060028084015460001961010060018316150201160415801561124557506001830154611245906007546000906201518001421115611221574260075560006008555b600654600854830111806112385750600854828101105b1561142457506000611428565b15610ce85760038301805460ff1916600117905581151561126f5760018301546008805490910190555b825460018085015460405160028088018054600160a060020a039096169593949093839285926000199083161561010002019091160480156112f25780601f106112c7576101008083540402835291602001916112f2565b820191906000526020600020905b8154815290600101906020018083116112d557829003601f168201915b505091505060006040518083038185876185025a03f192505050156113415760405184907f33e13ecb54c3076d8e8bb8c2881800a4d972b792045ffae98fdf46df365fed7590600090a2610ce8565b60405184907f526441bb6c1aba3c9a4a6ca1d6545da9c2333c8c48343ef398eb858d72b7923690600090a260038301805460ff19169055811515610ce8575050600101546008805491909103905550565b82800160010185558215610c06579182015b82811115610c065782518260005055916020019190600101906113a4565b5050606091909101516003909101805460ff191660f860020a9283029290920491909117905560058054600101905560405182907fc0ba8fe4b176c1714197d43b9cc6bcf797a4a7461c5fe8d0ef6e184ae7601e5190600090a2509392505050565b5060015b91905056"
  },
  "token": {
    "abi": [{"inputs": [], "constant": true, "name": "name", "payable": false, "outputs": [{"type": "string", "name": ""}], "type": "function"}, {"inputs": [{"type": "address", "name": "spender"}, {"type": "uint256", "name": "value"}], "constant": false, "name": "approve", "payable": false, "outputs": [{"type": "bool", "name": "success"}], "type": "function"}, {"inputs": [], "constant": true, "name": "totalSupply", "payable": false, "outputs": [{"type": "uint256", "name": "supply"}], "type": "function"}, {"inputs": [{"type": "address", "name": "from"}, {"type": "address", "name": "to"}, {"type": "uint256", "name": "value"}], "constant": false, "name": "transferFrom", "payable": false, "outputs": [{"type": "bool", "name": "success"}], "type": "function"}, {"inputs": [], "constant": true, "name": "decimals", "payable": false, "outputs": [{"type": "uint8", "name": ""}], "type": "function"}, {"inputs": [{"type": "address", "name": "owner"}], "constant": true, "name": "balanceOf", "payable": false, "outputs": [{"type": "uint256", "name": "balance"}], "type": "function"}, {"inputs": [], "constant": true, "name": "symbol", "payable": false, "outputs": [{"type": "string", "name": ""}], "type": "function"}, {"inputs": [{"type": "address", "name": "to"}, {"type": "uint256", "name": "value"}], "constant": false, "name": "transfer", "payable": false, "outputs": [{"type": "bool", "name": "success"}], "type": "function"}, {"inputs": [{"type": "address", "name": "owner"}, {"type": "address", "name": "spender"}], "constant": true, "name": "allowance", "payable": false, "outputs": [{"type": "uint256", "name": "remaining"}], "type": "function"}, {"inputs": [{"indexed": true, "type": "address", "name": "from"}, {"indexed": true, "type": "address", "name": "to"}, {"indexed": false, "type": "uint256", "name": "value"}], "type": "event", "name": "Transfer", "anonymous": false}, {"inputs": [{"indexed": true, "type": "address", "name": "owner"}, {"indexed": true, "type": "address", "name": "spender"}, {"indexed": false, "type": "uint256", "name": "value"}], "type": "event", "name": "Approval", "anonymous": false}]
  },
  "multiSigDailyLimitFactory" : {
    "abi": [{"inputs": [{"type": "address", "name": ""}], "constant": true, "name": "isInstantiation", "payable": false, "outputs": [{"type": "bool", "name": ""}], "type": "function"}, {"inputs": [{"type": "address[]", "name": "_owners"}, {"type": "uint256", "name": "_required"}, {"type": "uint256", "name": "_dailyLimit"}], "constant": false, "name": "create", "payable": false, "outputs": [{"type": "address", "name": "wallet"}], "type": "function"}, {"inputs": [{"type": "address", "name": ""}, {"type": "uint256", "name": ""}], "constant": true, "name": "instantiations", "payable": false, "outputs": [{"type": "address", "name": ""}], "type": "function"}, {"inputs": [{"type": "address", "name": "creator"}], "constant": true, "name": "getInstantiationCount", "payable": false, "outputs": [{"type": "uint256", "name": ""}], "type": "function"}, {"inputs": [{"indexed": false, "type": "address", "name": "sender"}, {"indexed": false, "type": "address", "name": "instantiation"}], "type": "event", "name": "ContractInstantiation", "anonymous": false}]
  }
};
