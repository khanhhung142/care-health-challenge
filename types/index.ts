import type {Dispatch, SetStateAction} from 'react'
export interface DataFromAPI {
  fallback: {
    status: string;
    data: {
      stats: {
        total: number;
        total24hVolume: string;
        totalCoins: number;
        totalExchanges: number;
        totalMarketCap: string;
        totalMarkets: number;
      };
      coins: Array<any>;
    };
  };
}

export interface Coin {

}

export interface ContextType {
  price: [DataFromAPI | null, Dispatch<SetStateAction<DataFromAPI | null>>],
  change: [DataFromAPI | null, Dispatch<SetStateAction<DataFromAPI | null>>],
  marketcap: [DataFromAPI | null, Dispatch<SetStateAction<DataFromAPI | null>>],
}