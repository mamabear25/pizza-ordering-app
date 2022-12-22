import axios from "axios";
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import PromoList from "../components/PromoList";
import Featured from '../components/Featured';

export default function Home({ promoList }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Best Pizza Place in Lagos</title>
        <meta name="description" content="Best pizza shop in Lagos" />
        <link rel="icon" href="/img/logo.png" />
      </Head>
      <Featured />
      <PromoList promoList={promoList} />
    </div>
  );
}

export const getServerSideProps = async () => {
  // vercel
  const res = await axios.get("https://pizza-ordering-8f1q08h0h-mamabear25.vercel.app/api/promos", {
    headers:{
      "Access-Control-Allow-Origin": "https://pizza-ordering-nr82kh1rl-mamabear25.vercel.app" 
    }
  });
  return {
    props: {
      promoList: res.data,
    },
  };
};

