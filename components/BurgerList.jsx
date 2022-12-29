import styles from "../styles/PizzaList.module.css";
import BurgerCard from "./BurgerCard";
import {useState, useEffect} from "react"
import axios from "axios";
import { Row, Col } from 'reactstrap';


const BurgerList = () => {
    const [burgerList, setBurgerList] = useState([]);

    const getBurgerList = async () => {

    const res = await axios.get("https://pizza-jgk6hlx9v-mamabear25.vercel.app/api/burgers");

    setBurgerList(res.data);
    };

    useEffect(() => {
        getBurgerList();
    }, []);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>techMomma&apos;s Burger</h1>
            <p className={styles.desc}>
                Grab any of our signature fluffy or cheesy burger
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
