import axios from "axios";
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import PromoList from "../components/PromoList";
import Featured from '../components/Featured';

export default function Home({ promoList }) {
  return (
    <div className={styles.row}>
      <Head>
        <title>Best Pizza Place in Lagos</title>
        <meta name="description" content="Best pizza shop in Lagos" />
        <link rel="icon" href="/img/promo1.png" />
      </Head>
      <Featured />
      <PromoList promoList={promoList} />
    </div>
  );
}

export const getServerSideProps = async () => {
  const res = await axios.get("https://pizza-jgk6hlx9v-mamabear25.vercel.app/api/promos");
  return {
    props: {
      promoList: res.data,
    },
  };
};

