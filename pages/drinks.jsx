import axios from "axios";
import DrinkList from "../components/DrinkList";
import styles from "../styles/Home.module.css";

export default function DrinkHome({ drinkList }) {
  return (
    <div className={styles.container}>
      <DrinkList drinkList={drinkList} />
    </div>
  );
}

export const getServerSideProps = async () => {

  const res = await axios.get("https://pizza-ordering-8f1q08h0h-mamabear25.vercel.app/api/drinks");
  return {
    props: {
        drinkList: res.data,
    },
  };
};