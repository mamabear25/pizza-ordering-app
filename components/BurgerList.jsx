import styles from "../styles/PizzaList.module.css";
import BurgerCard from "./BurgerCard";
import {useState, useEffect} from "react"
import axios from "axios";

const BurgerList = () => {
    const [burgerList, setBurgerList] = useState([]);

    const getBurgerList = async () => {
    const res = await axios.get("http://localhost:3000/api/burgers");

    setBurgerList(res.data);
    };

    useEffect(() => {
        getBurgerList();
    }, []);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>techMomma's Burger</h1>
            <p className={styles.desc}>
                lorem ipsum dolor sit amet conecteur auris sed dignissim ipsum
            </p>
            <div className={styles.wrapper}>
                {burgerList.map((burger) => (
                <BurgerCard key={burger._id} burger={burger} />
                ))}
            </div>
        </div>
    )
}

export default BurgerList;
