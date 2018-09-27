const ValorTokenMockup = artifacts.require('ValorTokenMockup')
const MultiSigWallet = artifacts.require('MultiSigWallet')
const ValorStakeFactory = artifacts.require('ValorStakeFactory')
const ValorTimeLock = artifacts.require('ValorTimelock')

const utils = require('./utils')

// the ValorToken mockup
const deployValorToken = (employeePool, futureDevFund, companyWallet) => {
    return ValorTokenMockup.new(employeePool, futureDevFund, companyWallet)
}

// the multisig wallet
const deployMultisig = (owners, confirmations) => {
    return MultiSigWallet.new(owners, confirmations)
}

// the Valor Stake factory
const deployValorStakeFactory = (tokenAddress, companyWallet) => {
    return ValorStakeFactory.new(tokenAddress,companyWallet)
}

contract('ValorTimelock', (accounts) => {
  let multisigInstance
  let valorTokenMockup
  let valorStakeFactory
  let valorTimelock;

  const requiredConfirmations = 2

  // let's deploy all contracts before each test.
  beforeEach(async () => {
      valorTokenMockup = await deployValorToken(accounts[0], accounts[1], accounts[2])
      assert.ok(valorTokenMockup)

      multisigInstance = await deployMultisig([accounts[0], accounts[1], accounts[2]], requiredConfirmations)
      assert.ok(multisigInstance)

      valorStakeFactory = await deployValorStakeFactory(valorTokenMockup.address, multisigInstance.address)
      assert.ok(valorStakeFactory)
      assert.equal(await valorStakeFactory.token.call(), valorTokenMockup.address)
      assert.equal(await valorStakeFactory.owner.call(), multisigInstance.address)

  })

  it('allows doing emergency release only from multisig transaction', async () => {
    // lets add some funds to account 5
    let funds = 100000;
    await valorTokenMockup.transfer(accounts[5], funds, {from: accounts[0]});
    assert.equal(await valorTokenMockup.balanceOf(accounts[5]), funds)

    // account 5 will freeze the valorTokens funds on a ValorTimelock contract.
    await valorTokenMockup.approve(valorStakeFactory.address, funds, {from: accounts[5]})
    let valorTimeLockAddress = utils.getParamFromTxEvent(
    await valorStakeFactory.createStake(86400, funds, {from: accounts[5]})
       , 'stake', null, 'StakeCreated');

    // no more funds for account[5], they are all locked.
    assert.equal(await valorTokenMockup.balanceOf(accounts[5]), 0)

    // I create the instance of the valorTimeLock from the address returned by the factory
    valorTimelock = ValorTimeLock.at(valorTimeLockAddress)

    // will try to perform an emergencyRelease by the owner of the funds (account[5])
    try{
        await valorTimelock.emergencyRelease({from: accounts[5]})
        assert.fail('Expected emergency release to be rejected.')
      } catch (error){
          // so far so good
      }

    // Will generate the payload to perform the emergency release
    const payload = await valorTimelock.contract.emergencyRelease.getData()
    // I'm submitting the transaction from the multisig wallet.
    const transactionId = utils.getParamFromTxEvent(
    await multisigInstance.submitTransaction(valorTimelock.address, 0, payload, {from: accounts[0]}),
        'transactionId', null, 'Submission')

    // let's confirm the transaction by another multisig approver
    await multisigInstance.confirmTransaction(transactionId, {from: accounts[1]})

    // and verify funds have been released.
    assert.equal(await valorTokenMockup.balanceOf(accounts[5]), funds)
  })
})
