require("@matterlabs/hardhat-zksync-solc");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  zksolc: {
    version: "1.3.9",
    compilerSource: "binary",
    settings: {
      optimizer: {
        enabled: true,
      },
    },
  },
  networks: {
    // zksync_testnet: {
    //   url: "https://zksync2-testnet.zksync.dev",
    //   ethNetwork: "goerli",
    //   chainId: 280,
    //   zksync: true,
    // },
    // zksync_mainnet: {
    //   url: "https://zksync2-mainnet.zksync.io/",
    //   ethNetwork: "mainnet",
    //   chainId: 324,
    //   zksync: true,
    // },
    AvalancheFujiTestnet:{
      url:'https://avalanche-fuji.infura.io/v3/9c0ea514ddc040059a5426506c2f12ed',
      accounts:[`b88e8c843039c42814a9b3a24911b6d26f0458a7169254030a44c74207008ffb`]
    }
  },
  paths: {
    artifacts: "./artifacts-zk",
    cache: "./cache-zk",
    sources: "./contracts",
    tests: "./test",
  },
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
