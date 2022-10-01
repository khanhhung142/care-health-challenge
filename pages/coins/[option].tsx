import type { NextPage, GetServerSideProps } from "next";
import {useContext, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import OptionBar from "../../components/OptionBar";
import {DataFromAPI, ContextType} from '../../types/index'
const Coins: NextPage<DataFromAPI> = (props: DataFromAPI) => {
  const { query } = useRouter();
  // const [coins, setCoins] = useState(props.fallback);
  console.log(props.fallback)
  return (
    <div className="container">
      <OptionBar />
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
