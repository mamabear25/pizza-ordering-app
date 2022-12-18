import axios from "axios";
import BurgerList from "../components/BurgerList";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import AddBurgerButton from "../components/AddBurgerButton";
import AddBurger from "../components/AddBurger";


export default function BurgerHome({ burgerList }) {
  const [closeBurger, setBurgerClose] = useState(true);
  return (
    <div className={styles.container}>
      {<AddBurgerButton setBurgerClose={setBurgerClose} />}
      <BurgerList burgerList={burgerList} />
      {!closeBurger && <AddBurger setBurgerClose={setBurgerClose} />}
    </div>
  );
}

export const getServerSideProps = async () => {

  const res = await axios.get("http://localhost:3000/api/burgers");
  return {
    props: {
        burgerList: res.data,
    },
  };
};