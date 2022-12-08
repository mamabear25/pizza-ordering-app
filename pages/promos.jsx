import axios from "axios";
import PromoList from "../components/PromoList";
import styles from "../styles/Home.module.css";

export default function Home({ promoList }) {
  return (
    <div className={styles.container}>
      <PromoList promoList={promoList} />
    </div>
  );
}

export const getServerSideProps = async () => {

  const res = await axios.get("http://localhost:3000/api/promos");
  return {
    props: {
        promoList: res.data,
    },
  };
};