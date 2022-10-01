import type { NextPage, GetServerSideProps } from "next";
import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import OptionBar from "../../components/OptionBar";
import { DataFromAPI } from "../../types/index";
import { CoinContext } from "../../contexts/coinsContext";
import CoinsPanel from "../../components/CoinsPanel";
const Coins: NextPage<DataFromAPI> = (props: DataFromAPI) => {
  const { query } = useRouter();
  const context = useContext(CoinContext);
  const itemIndex = context.findIndex((item) => item.orderBy === `${query.option}`)
  useEffect(()=>{
    if (context[itemIndex].coins === null) {
      context[itemIndex].setCoins(props.fallback.data)
    }
  })
  return (
    <div className="container">
      <OptionBar />
      <CoinsPanel />
    </div>
  );
};
// I cant request Coin ranking api thought localhost (cors error), although I tried following the doc
// But I can request api thought server side

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (params) {
    const res = await fetch(
      `https://api.coinranking.com/v2/coins?orderBy=${params.option}`
    );
    const data = await res.json();
    return { props: { fallback: data } };
  } else {
    const res = await fetch(`https://api.coinranking.com/v2/coins`);
    const data = await res.json();
    return { props: { fallback: data } };
  }
};
export default Coins;
