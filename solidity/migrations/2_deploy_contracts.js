/* global artifacts */
/* eslint-disable prefer-reflect */

const SafeMath = artifacts.require('SafeMath.sol');
const Owned = artifacts.require('Owned.sol');
const TokenHolder = artifacts.require('TokenHolder.sol');
const ERC20Token = artifacts.require('ERC20Token.sol');
const SmartToken = artifacts.require('SmartToken.sol');
const SmartTokenController = artifacts.require('SmartTokenController.sol');
const CrowdsaleController = artifacts.require('CrowdsaleController.sol');

module.exports = async (deployer) => {
    deployer.deploy(SafeMath);
    deployer.deploy(Owned);
    deployer.deploy(TokenHolder);
    deployer.deploy(ERC20Token, 'DummyToken', 'DUM', 0);
    await deployer.deploy(SmartToken, 'Token1', 'TKN1', 2);
    deployer.deploy(SmartTokenController, SmartToken.address);
    deployer.deploy(CrowdsaleController, SmartToken.address, 4102444800, '0x125', '0x126', 1);
};
