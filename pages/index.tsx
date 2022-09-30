import type { NextPage, GetServerSideProps  } from 'next'
import styles from '../styles/Home.module.css'
import useSWR, { Key, Fetcher, SWRConfig } from 'swr'

interface Props {
  fallback: {
    status: string,
    data: {
      stats: {
        total: number,
        total24hVolume: string,
        totalCoins: number,
        totalExchanges: number,
        totalMarketCap: string,
        totalMarkets: number
      }
      coins: Array<any>
    }
  }
}

const Home: NextPage<Props> = (props : Props) => {
  const {fallback} = props
  return (
    <SWRConfig value={{ fallback }}>
      
    </SWRConfig>
  )
}

const fetcher : Fetcher = (url:string) => fetch(url).then((res) => res.json());


export const getServerSideProps:GetServerSideProps = async () => {
  const data = await fetcher(`https://api.coinranking.com/v2/coins`)
  return { props: { fallback : data } }
}

export default Home
