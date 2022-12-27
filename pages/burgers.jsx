import axios from "axios";
import BurgerList from "../components/BurgerList";
import styles from "../styles/Home.module.css";

export default function BurgerHome({ burgerList }) {
  return (
    <div className={styles.container}>
      <BurgerList burgerList={burgerList} />
    </div>
  );
}

export const getServerSideProps = async () => {

  const res = await axios.get("https://pizza-jb1hwqmhw-mamabear25.vercel.app/api/burgers");
  return {
    props: {
        burgerList: res.data,
    },
  };
};