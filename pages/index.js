import axios from "axios";
import Head from 'next/head';
import Image from "next/image";
import styles from '../styles/Home.module.css';
import PromoList from "../components/PromoList";
import Featured from '../components/Featured';
import { useState } from "react";
import AddPromoButton from "../components/AddPromoButton";
import AddPromo from "../components/AddPromo";

export default function Home({ promoList }) {
  const [close, setClose] = useState(true);
  return (
    <div className={styles.container}>
      <Head>
        <title>Best Pizza Place in Lagos</title>
        <meta name="description" content="Best pizza shop in Lagos" />
        <link rel="icon" href="/img/logo.png" />
      </Head>
      <Featured />
      {<AddPromoButton setClose={setClose}/>}
      {!close && <AddPromo setClose={setClose} />}
      <PromoList promoList={promoList} />
    </div>
  )
}

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/promos");
  return {
    props: {
      promoList: res.data,
    },
  };
};

