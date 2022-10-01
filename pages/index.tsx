import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="warper">
      <Link href="/coins/price" className="beginButton">
        <a>Click here to see crypto info</a>
      </Link>
    </div>
  );
};

export default Home;
