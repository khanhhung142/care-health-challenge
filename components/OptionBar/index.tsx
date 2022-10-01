import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
function OptionBar() {
  const { query } = useRouter();
  return (
    <div className="optionBar">
      <p>Order by : {query.option}</p>
      <div className="optionBar__optionContainer">
        <Link href="/coins/price">
          <a>Price</a>
        </Link>
        <Link href="/coins/change">
          <a>Change</a>
        </Link>
        <Link href="/coins/marketCap">
          <a>Market Cap</a>
        </Link>
      </div>
    </div>
  );
}

export default OptionBar;
