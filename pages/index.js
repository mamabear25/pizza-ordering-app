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
  const res = await axios.get("https://pizza-ermwhi9go-mamabear25.vercel.app/api/promos", {
    headers: {
      "Access-Control-Allow-Origin": "https://pizza-app-omega.vercel.app",
      "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT",
      "Access-Control-Allow-Headers": "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" ,
      "Access-Max-Age": "86400"

    }
  });
  return {
    props: {
      promoList: res.data,
    },
  };
};

