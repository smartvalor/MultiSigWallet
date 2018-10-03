const MultiSigWallet = artifacts.require('MultiSigWallet.sol')
const MultiSigWalletFactory = artifacts.require('MultiSigWalletFactory.sol')
const ValorTokenMockup = artifacts.require('ValorTokenMockup')
const ValorStakeFactory = artifacts.require('ValorStakeFactory')

module.exports = (deployer, networks, accounts)=> {
  // deploy the Factory to specify at dapp
  deployer.deploy(MultiSigWalletFactory).then(function (){
    // deploy multiSig Wallet
    return deployer.deploy(MultiSigWallet, [accounts[0], accounts[1], accounts[2]], 2)
  }).then(function (){
    // deploy ValorToken Mockup
    return deployer.deploy(ValorTokenMockup, accounts[0], accounts[1], accounts[2])
  }).then (function (){
    return deployer.deploy(ValorStakeFactory, ValorTokenMockup.address, MultiSigWallet.address)
  })
}
