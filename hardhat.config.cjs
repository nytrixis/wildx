require("@nomiclabs/hardhat-ethers");

module.exports = {
  solidity: "0.8.20",
  networks: {
    fuji: {
      url: 'https://api.avax-test.network/ext/bc/C/rpc',
      gasPrice: 225000000000,
      chainId: 43113,
      accounts: ['ebf0a5874b92920b1d07ec6192fbb41f65a78ac2605a26a4f7e65340076bd183']
    }
  }
};