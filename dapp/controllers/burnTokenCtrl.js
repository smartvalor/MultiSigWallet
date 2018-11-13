(
  function () {
    angular
    .module("multiSigWeb")
    .controller("burnTokenCtrl", function ($scope, Wallet, burnableToken, Transaction, Utils, wallet, token, $uibModalInstance, Web3Service) {

      $scope.wallet = wallet;
      $scope.token = token;
      $scope.amount = 10;
      $scope.to = Web3Service.coinbase;

      $scope.burn = function () {
        burnableToken.burn(
          $scope.token.address,
          $scope.wallet.address,
          $scope.to,
          new Web3().toBigNumber($scope.amount).mul('1e' + $scope.token.decimals),
          function (e, tx) {
            if (e) {
              Utils.dangerAlert(e);
            }
            else {
              Utils.notification("Burn token transaction was sent.");
              $uibModalInstance.close();
              Transaction.add({
                txHash: tx,
                callback: function () {
                  Utils.success("Burn token transaction was mined.");
                }
              });
            }
          }
        );
      };

      $scope.signOff = function () {
        burnableToken.withdrawOffline(
          $scope.token.address,
          $scope.wallet.address,
          $scope.to,
          new Web3().toBigNumber($scope.amount).mul('1e' + $scope.token.decimals),
          function (e, signed) {
            $uibModalInstance.close();
            Utils.signed(signed);
          }
        );
      };

      $scope.getNonce = function () {
        var value = new Web3().toBigNumber($scope.amount).mul('1e' + $scope.token.decimals);
        var data = burnableToken.withdrawData(
          $scope.token.address,
          $scope.to,
          new Web3().toBigNumber($scope.amount).mul('1e' + $scope.token.decimals)
        );
        Wallet.getNonce($scope.wallet.address, $scope.token.address, "0x0", data, function (e, nonce) {
          if (e) {
            Utils.dangerAlert(e);
          }
          else{
            $uibModalInstance.close();
            Utils.nonce(nonce);
          }
        }).call();

      };

      $scope.cancel = function () {
        $uibModalInstance.dismiss();
      };
    });
  }
)();
