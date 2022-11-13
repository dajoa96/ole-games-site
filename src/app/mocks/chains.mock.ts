export const ChainsMock = [
  {
    active: true,
    chainId: 1,
    chainDecimals: 18,
    chainTag: 'ETH',
    metadata: {
      icon: 'assets/images/chains/eth-icon.png',
      name: 'Ethereum',
    },
    nativeCurrency: {
      name: 'ETH',
      symbol: 'ETH'
    },
    rcp: {
      link: 'https://eth-mainnet.nodereal.io/v1/1659dfb40aa24bbb8153a677b98064d7'
    }
  },
  {
    active: true,
    chainId: 56,
    chainDecimals: 18,
    chainTag: 'BSC',
    metadata: {
      icon: 'assets/images/chains/bnb-icon.png',
      name: 'Binance Smart Chain',
    },
    nativeCurrency: {
      name: 'BNB',
      symbol: 'BNB'
    },
    rcp: {
      link: 'https://bsc-dataseed.binance.org/'
    }
  },
  {
    active: true,
    chainId: 137,
    chainDecimals: 18,
    chainTag: 'MATIC',
    metadata: {
      name: 'Polygon',
      icon: 'assets/images/chains/matic-icon.png',
    },
    nativeCurrency: {
      name: 'MATIC',
      symbol: 'MATIC'
    },
    rcp: {
      link: 'https://polygon-rpc.com/'
    }
  }
];
