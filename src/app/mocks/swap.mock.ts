import { environment } from "src/environments/environment";

export const SwapMock: any = {
  'bsc': [
    { name: 'BUSD', value: 'busd', contract: environment.contracts.bsc.busd },
    { name: 'USDT', value: 'usdt', contract: environment.contracts.bsc.usdt },
    { name: 'USDC', value: 'usdc', contract: environment.contracts.bsc.usdc },
  ],
  'matic': [
    { name: 'USDT', value: 'usdt', contract: environment.contracts.matic.usdt },
    { name: 'USDC', value: 'usdc', contract: environment.contracts.matic.usdc },

  ],
  'eth': [
    { name: 'USDT', value: 'usdt', contract: environment.contracts.eth.usdt },
    { name: 'USDC', value: 'usdc', contract: environment.contracts.eth.usdc },
  ]
}
