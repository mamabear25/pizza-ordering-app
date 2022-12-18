import axios from "axios";
import DrinkList from "../components/DrinkList";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import AddDrinkButton from "../components/AddDrinkButton";
import AddDrink from "../components/AddDrink";


export default function DrinkHome({ drinkList }) {
  const [closeDrink, setDrinkClose] = useState(true);
  return (
    <div className={styles.container}>
      {<AddDrinkButton setDrinkClose={setDrinkClose} />}
      <DrinkList drinkList={drinkList} />
      {!closeDrink && <AddDrink setDrinkClose={setDrinkClose} />}
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