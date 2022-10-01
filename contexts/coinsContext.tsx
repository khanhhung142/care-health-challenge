import React, { createContext, useState } from "react";
import { ContextType, Coins } from "../types/index";

export const CoinContext = createContext<Array<ContextType>>([]);
interface Props {
  children: React.ReactChild;
}

export const CoinContextProvider: React.FC<Props> = ({ children }) => {
  const [orderByPrice, setOrderByPrice] = useState<Coins | null>(null);
  const [orderByChange, setOrderByChange] = useState<Coins | null>(null);
  const [orderByMarketCap, setOrderByMarketCap] = useState<Coins | null>(
    null
  );
  return (
    <CoinContext.Provider
      value={[
        { orderBy: "price", coins: orderByPrice, setCoins: setOrderByPrice },
        { orderBy: "change", coins: orderByChange, setCoins: setOrderByChange },
        {
          orderBy: "marketCap",
          coins: orderByMarketCap,
          setCoins: setOrderByMarketCap,
        },
      ]}
    >
      {children}
    </CoinContext.Provider>
  );
};
