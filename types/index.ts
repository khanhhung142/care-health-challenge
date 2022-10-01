import type { Dispatch, SetStateAction } from "react";
export interface DataFromAPI {
  fallback: {
    status: string;
    data: Coins
  };
}

export interface Coins {
  stats: {
    total: number;
    total24hVolume: string;
    totalCoins: number;
    totalExchanges: number;
    totalMarketCap: string;
    totalMarkets: number;
  };
  coins: Array<any>;
}

export interface ContextType {
  orderBy: string;
  coins: Coins | null;
  setCoins: Dispatch<SetStateAction<Coins | null>>;
}
