import axios from "axios";
import PizzaList from "../components/PizzaList";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import AddPizzaButton from "../components/AddPizzaButton";
import AddPizza from "../components/AddPizza";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

export default function PizzaHome({ pizzaList }) {
  const [close, setClose] = useState(true);
  return (
    <div className={styles.container}>
      {<AddPizzaButton setClose={setClose} />}
      <PizzaList pizzaList={pizzaList} />
      {!close && <AddPizza setClose={setClose} />}
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