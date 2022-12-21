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

  const res = await axios.get("http://localhost:3000/api/drinks");
  return {
    props: {
        drinkList: res.data,
    },
  };
};