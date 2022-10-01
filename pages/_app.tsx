import "../styles/globals.css";
import '../styles/styles.css'
import type { AppProps } from "next/app";
import { CoinContextProvider } from "../contexts/coinsContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CoinContextProvider>
      <Component {...pageProps} />
    </CoinContextProvider>
  );
}

export default MyApp;
