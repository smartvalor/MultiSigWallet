(
  function () {
    angular
    .module("multiSigWeb")
    .service("BurnToken", function (Wallet, Web3Service) {
      var factory = {};

      factory.abi = abiJSON.burnableToken.abi;

      factory.burn = function (tokenAddress, wallet, value, options, cb) {
          var walletInstance = Web3Service.web3.eth.contract(Wallet.json.multiSigDailyLimit.abi).at(wallet);
          var tokenInstance = Web3Service.web3.eth.contract(factory.abi).at(tokenAddress);
          var data = tokenInstance.burn.getData(
              value
          );
          // Get nonce
          Wallet.getTransactionCount(wallet, true, true, function (e, count) {
              if (e) {
                  cb(e);
              }
              else {

                  Web3Service.configureGas(Wallet.txDefaults({gas: 500000}), function (gasOptions){
                      walletInstance.submitTransaction(
                          tokenAddress,
                          "0x0",
                          data,
                          count,
                          Wallet.txDefaults({
                              gas: gasOptions.gas,
                              gasPrice: gasOptions.gasPrice
                          }),
                          options,
                          cb);
                  });
              }
          }).call();
      };


      factory.burnOffline = function (tokenAddress, wallet, value, cb) {
          var walletInstance = Web3Service.web3.eth.contract(Wallet.json.multiSigDailyLimit.abi).at(wallet);
          var tokenInstance = Web3Service.web3.eth.contract(factory.abi).at(tokenAddress);
          var data = tokenInstance.burn.getData(
              value
          );

          // Get nonce
          Wallet.getUserNonce(function (e, nonce) {
              if (e) {
                  cb(e);
              }
              else {
                  var mainData = walletInstance.submitTransaction.getData(tokenAddress, "0x0", data);
                  Wallet.offlineTransaction(wallet, mainData, nonce, cb);
              }
          });
      };

      factory.burnData = function (tokenAddress, value) {
          var tokenInstance = Web3Service.web3.eth.contract(factory.abi).at(tokenAddress);
          return tokenInstance.burn.getData(
              value
          );
      };

      return factory;
    });
  }
)();
