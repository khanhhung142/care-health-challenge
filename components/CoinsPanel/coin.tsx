import React from "react";
import type { NextPage } from "next";
import Image from "next/image";
interface CoinProps {
  name: string;
  symbol: string;
  iconUrl: string;
  price: string;
  marketCap: string;
  change: string;
}
const LOGO_SIZE = 50
const Coin: NextPage<CoinProps> = ({
  name,
  symbol,
  iconUrl,
  price,
  marketCap,
  change,
}) => {
  return (
    <div className="coinInfo">
      <div className="coinInfo__identity">
        <div className="coinInfo__identity--logo">
          <Image
            loader={() => iconUrl}
            src={iconUrl}
            alt={`${name} logo`}
            width={LOGO_SIZE}
            height={LOGO_SIZE}
          />
        </div>
        <div className="coinInfo__identity--name">
            <h1>{name}</h1>
            <p>{symbol}</p>
          </div>
      </div>
      <div className="coinInfo__price">
        <p>Price: <span>${price}</span></p>
        <p>Market cap: <span>{marketCap}</span></p>
        <p>Change: <span>{change}</span></p>
      </div>
    </div>
  );
};

export default Coin;
