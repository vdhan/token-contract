require('@nomiclabs/hardhat-ethers');
require('@nomiclabs/hardhat-etherscan');
require('dotenv').config();

module.exports = {
  solidity: {
    version: '0.8.17',
    settings: {
      optimizer: {
        enabled: true
      }
    }
  },

  networks: {
    testnet: {
      url: 'https://data-seed-prebsc-1-s3.binance.org:8545',
      accounts: [process.env.PRIVATE_KEY]
    }
  },

  etherscan: {apiKey: process.env.SCAN_TOKEN}
};
