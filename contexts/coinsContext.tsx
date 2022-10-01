import React, { createContext, useState } from "react";
import {DataFromAPI, ContextType} from '../types/index'

const CoinContext = createContext<ContextType | null>(null);
interface Props {
  children: React.ReactChild,
}
export const CoinContextProvider: React.FC<Props> = ({children}) => {
  const [orderByPrice, setOrderByPrice] = useState<DataFromAPI | null>(null);
  const [orderByChange, setOrderByChange] = useState<DataFromAPI | null>(null);
  const [orderByMarketCap, setOrderByMarketCap] = useState<DataFromAPI | null>(null);
  return (
    <CoinContext.Provider
      value={{
        price: [orderByPrice, setOrderByPrice],
        change: [orderByChange, setOrderByChange],
        marketcap: [orderByMarketCap, setOrderByMarketCap],
      }}
    >
      {children}
    </CoinContext.Provider>
  );
};
