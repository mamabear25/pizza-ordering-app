import axios from "axios";
import BurgerList from "../components/BurgerList";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import AddBurgerButton from "../components/AddBurgerButton";
import AddBurger from "../components/AddBurger";


export default function BurgerHome({ burgerList }) {
  const [close, setClose] = useState(true);
  return (
    <div className={styles.container}>
      {<AddBurgerButton setClose={setClose} />}
      <BurgerList burgerList={burgerList} />
      {!close && <AddBurger setClose={setClose} />}
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