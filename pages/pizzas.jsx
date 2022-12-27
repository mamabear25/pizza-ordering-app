import axios from "axios";
import PizzaList from "../components/PizzaList";
import styles from "../styles/Home.module.css";

export default function PizzaHome({ pizzaList }) {
  return (
    <div className={styles.container}>
      <PizzaList pizzaList={pizzaList} />
    </div>
  );
}

export const getServerSideProps = async () => {

  const res = await axios.get("https://pizza-app-omega.vercel.app/api/products");
  return {
    props: {
      pizzaList: res.data,
    },
  };
};