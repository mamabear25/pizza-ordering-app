import axios from "axios";
import BurgerList from "../components/BurgerList";
import styles from "../styles/Home.module.css";

export default function Home({ burgerList }) {
  return (
    <div className={styles.container}>
      <BurgerList burgerList={burgerList} />
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