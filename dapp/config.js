var txDefaultOrig =
{
  gasLimit: 3141592,
  gasPrice: 18000000000,
  ethereumNode: "https://mainnet.infura.io:443",
  connectionChecker:{
    method : "OPTIONS",
    url : "https://www.google.com",
    checkInterval: 5000
  },
  ethGasStation: "https://safe-relay.gnosis.pm/api/v1/gas-station/",
  wallet: "injected",
  defaultChainID: null,
  // Mainnet
  walletFactoryAddress: "0x6e95c8e8557abc08b46f3c347ba06f8dc012763f",
  tokens: [
    {
      'address': '0x6810e776880c02933d47db1b9fc05908e5386b96',
      'name': 'Gnosis',
      'symbol': 'GNO',
      'decimals': 18
    },
    {
      'address': '0xa74476443119A942dE498590Fe1f2454d7D4aC0d',
      'name': 'Golem',
      'symbol': 'GNT',
      'decimals': 18
    },
    {
      'address': '0x888666CA69E0f178DED6D75b5726Cee99A87D698',
      'name': 'Iconomi',
      'symbol': 'ICN',
      'decimals': 18
    },
    {
      'address': '0x48c80F1f4D53D5951e5D5438B54Cba84f29F32a5',
      'name': 'Augur',
      'symbol': 'REP',
      'decimals': 18
    },
    {
      'address': '0xc66ea802717bfb9833400264dd12c2bceaa34a6d',
      'name': 'Maker',
      'symbol': 'MKR',
      'decimals': 18
    },
    {
      'address': '0xe0b7927c4af23765cb51314a0e0521a9645f0e2a',
      'name': 'Digix Global',
      'symbol': 'DGD',
      'decimals': 9
    },
    {
      'address': '0xAf30D2a7E90d7DC361c8C4585e9BB7D2F6f15bc7',
      'name': 'FirstBlood',
      'symbol': '1ST',
      'decimals': 18
    },
    {
      'address': '0x0D8775F648430679A709E98d2b0Cb6250d2887EF',
      'name': 'Basic Attention Token',
      'symbol': 'BAT',
      'decimals': 18
    },
    {
      'address': '0x1F573D6Fb3F13d689FF844B4cE37794d79a7FF1C',
      'name': 'Bancor Network',
      'symbol': 'BNT',
      'decimals': 18
    },
    {
      'address': '0xaec2e87e0a235266d9c5adc9deb4b2e29b54d009',
      'name': 'SingularDTV',
      'symbol': 'SNGLS',
      'decimals': 0
    },
    {
      'address': '0x960b236A07cf122663c4303350609A66A7B288C0',
      'name': 'Aragon Network',
      'symbol': 'ANT',
      'decimals': 18
    },
    {
      'address': '0x607F4C5BB672230e8672085532f7e901544a7375',
      'name': 'iExec RLC',
      'symbol': 'RLC',
      'decimals': 9
    },
    {
      'address': '0xBEB9eF514a379B997e0798FDcC901Ee474B6D9A1',
      'name': 'Melon',
      'symbol': 'MLN',
      'decimals': 18
    },
    {
      'address': '0xb64ef51c888972c908cfacf59b47c1afbc0ab8ac',
      'name': 'Storjcoin X',
      'symbol': 'SJCX',
      'decimals': 8
    }
  ]
};

if (isElectron) {
  txDefaultOrig.wallet = "remotenode";
}

var txDefault = {
  ethereumNodes : [
    {
      url : "https://mainnet.infura.io:443",
      name: "Remote Mainnet"
    },
    {
      url : "https://ropsten.infura.io:443",
      name: "Remote Ropsten"
    },
    {
      url : "https://kovan.infura.io:443",
      name: "Remote Kovan"
    },
    {
      url : "https://rinkeby.infura.io:443",
      name: "Remote Rinkeby"
    },
    {
      url : "http://localhost:8545",
      name: "Local node"
    }
  ],
  walletFactoryAddresses: {
    'mainnet': {
      name: 'Mainnet',
      address: txDefaultOrig.walletFactoryAddress
    },
    'ropsten': {
      name: 'Ropsten',
      address: '0x5cb85db3e237cac78cbb3fd63e84488cac5bd3dd'
    },
    'kovan': {
      name: 'Kovan',
      address: '0x2c992817e0152a65937527b774c7a99a84603045'
    },
    'rinkeby': {
      name: 'Rinkeby',
      address: '0x19ba60816abca236baa096105df09260a4791418'
    },
    'privatenet': {
      name: 'Privatenet',
      address: '0xd79426bcee5b46fde413ededeb38364b3e666097'
    }
  }
};

var oldWalletFactoryAddresses = [
  ("0x12ff9a987c648c5608b2c2a76f58de74a3bf1987").toLowerCase(),
  ("0xed5a90efa30637606ddaf4f4b3d42bb49d79bd4e").toLowerCase(),
  ("0xa0dbdadcbcc540be9bf4e9a812035eb1289dad73").toLowerCase()
];

/**
* Update the default wallet factory address in local storage
*/
function checkWalletFactoryAddress() {
  var userConfig = JSON.parse(localStorage.getItem("userConfig"));

  if (userConfig && oldWalletFactoryAddresses.indexOf(userConfig.walletFactoryAddress.toLowerCase()) >= 0) {
    userConfig.walletFactoryAddress = txDefaultOrig.walletFactoryAddress;
    localStorage.setItem("userConfig", JSON.stringify(userConfig));
  }
}

/**
* Reload configuration
*/
function loadConfiguration () {
  var userConfig = JSON.parse(localStorage.getItem("userConfig"));
  Object.assign(txDefault, txDefaultOrig, userConfig);
}

checkWalletFactoryAddress();
loadConfiguration();


//added for stake factory
var stakeFactoryABI = [
    {
      "constant": true,
      "inputs": [],
      "name": "minStake",
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
      "inputs": [],
      "name": "unpause",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "paused",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "minLockPeriod",
      "outputs": [
        {
          "name": "",
          "type": "uint32"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "pause",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
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
          "name": "_newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "dismissed",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "token",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "_tokenAddress",
          "type": "address"
        },
        {
          "name": "_companyWallet",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "stake",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "beneficiary",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "lockPeriod",
          "type": "uint256"
        },
        {
          "indexed": false,
          "name": "atStake",
          "type": "uint256"
        }
      ],
      "name": "StakeCreated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "FactoryDismiss",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "Pause",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [],
      "name": "Unpause",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "previousOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipRenounced",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_lockPeriod",
          "type": "uint32"
        },
        {
          "name": "_atStake",
          "type": "uint256"
        }
      ],
      "name": "createStake",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "withdraw",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "dismiss",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_minStake",
          "type": "uint256"
        }
      ],
      "name": "setMinStake",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_minLockPeriod",
          "type": "uint32"
        }
      ],
      "name": "setMinLockPeriod",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "_beneficiary",
          "type": "address"
        }
      ],
      "name": "countByBeneficiary",
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
      "constant": true,
      "inputs": [
        {
          "name": "_beneficiary",
          "type": "address"
        },
        {
          "name": "_index",
          "type": "uint256"
        }
      ],
      "name": "lookupByBeneficiary",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ];

var stakeABI = [
   {
     "constant": true,
     "inputs": [],
     "name": "beneficiary",
     "outputs": [
       {
         "name": "",
         "type": "address"
       }
     ],
     "payable": false,
     "stateMutability": "view",
     "type": "function"
   },
   {
     "constant": true,
     "inputs": [],
     "name": "owner",
     "outputs": [
       {
         "name": "",
         "type": "address"
       }
     ],
     "payable": false,
     "stateMutability": "view",
     "type": "function"
   },
   {
     "constant": true,
     "inputs": [],
     "name": "releaseTime",
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
     "constant": true,
     "inputs": [],
     "name": "token",
     "outputs": [
       {
         "name": "",
         "type": "address"
       }
     ],
     "payable": false,
     "stateMutability": "view",
     "type": "function"
   },
   {
     "inputs": [
       {
         "name": "_token",
         "type": "address"
       },
       {
         "name": "_beneficiary",
         "type": "address"
       },
       {
         "name": "_admin",
         "type": "address"
       },
       {
         "name": "duration",
         "type": "uint256"
       }
     ],
     "payable": false,
     "stateMutability": "nonpayable",
     "type": "constructor"
   },
   {
     "anonymous": false,
     "inputs": [
       {
         "indexed": false,
         "name": "from",
         "type": "address"
       },
       {
         "indexed": false,
         "name": "to",
         "type": "address"
       },
       {
         "indexed": false,
         "name": "value",
         "type": "uint256"
       }
     ],
     "name": "EmergencyRelease",
     "type": "event"
   },
   {
     "constant": false,
     "inputs": [],
     "name": "release",
     "outputs": [],
     "payable": false,
     "stateMutability": "nonpayable",
     "type": "function"
   },
   {
     "constant": false,
     "inputs": [
       {
         "name": "amount",
         "type": "uint256"
       }
     ],
     "name": "partialRelease",
     "outputs": [],
     "payable": false,
     "stateMutability": "nonpayable",
     "type": "function"
   },
   {
     "constant": false,
     "inputs": [],
     "name": "emergencyRelease",
     "outputs": [],
     "payable": false,
     "stateMutability": "nonpayable",
     "type": "function"
   }
 ];
