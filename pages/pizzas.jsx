import axios from "axios";
import PizzaList from "../components/PizzaList";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import AddPizzaButton from "../components/AddPizzaButton";
import AddPizza from "../components/AddPizza";

export default function PizzaHome({ pizzaList }) {
  const [close, setPizzaClose] = useState(true);
  return (
    <div className={styles.container}>
      {<AddPizzaButton setPizzaClose={setPizzaClose} />}
      <PizzaList pizzaList={pizzaList} />
      {!close && <AddPizza setPizzaClose={setPizzaClose} />}
    </div>
  );
}

export const getServerSideProps = async () => {

  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      pizzaList: res.data,
    },
  };
};