import axios from "axios";
import PromoList from "../components/PromoList";
import styles from "../styles/Home.module.css";
import AddPromoButton from "../components/AddPromoButton";
import AddPromo from "../components/AddPromo";
import { useState } from "react";

export default function PromoHome({ promoList }) {
  const [closePromo, setPromoClose] = useState(true);
  return (
    <div className={styles.container}>
      {<AddPromoButton setPromoClose={setPromoClose} />}
      <PromoList promoList={promoList} />
      {!closePromo && <AddPromo setPromoClose={setPromoClose} />}
    </div>
  );
}

export const getServerSideProps = async () => {

  const res = await axios.get("https://pizza-ordering-app-psi.vercel.app/api/promos");
  return {
    props: {
        promoList: res.data,
    },
  };
};