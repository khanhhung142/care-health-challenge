import type { NextPage } from "next";
import { useContext, useEffect, useState } from "react";
import { CoinContext } from "../../contexts/coinsContext";
import { useRouter } from "next/router";
import Coin from "./coin";
const CoinsPanel: NextPage = () => {
  const { query } = useRouter();
  const context = useContext(CoinContext);
  const itemIndex = context.findIndex(
    (item) => item.orderBy === `${query.option}`
  );
  // TODO: add a state to manage this null error
  if(context[itemIndex].coins !== null) {
    return (
      <div className="coinsPanel">
        {context[itemIndex].coins.coins.map((item) => (
          <Coin
            name={item.name}
            symbol={item.symbol}
            iconUrl={item.iconUrl}
            price={item.price}
            marketCap={item.marketCap}
            change={item.change}
            key={`coins${item.name}`}
          />
        ))}
      </div>
    );
  }
  return (
    <div><h1>Loading</h1></div>
  )

};

export default CoinsPanel;
