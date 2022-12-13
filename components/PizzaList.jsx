import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";
import {useState, useEffect} from "react"
import axios from "axios";

const PizzaList = () => {
    const [pizzaList, setPizzaList] = useState([]);

    const getPizzaList = async () => {
    const res = await axios.get("http://localhost:3000/api/products");

    setPizzaList(res.data);
    };

    useEffect(() => {
        getPizzaList();
    }, []);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>techMomma's Pizza</h1>
            <p className={styles.desc}>
                Here's a list of our finger licking Pizza
            </p>
            <div className={styles.wrapper}>
                {pizzaList.map((pizza) => (
                <PizzaCard key={pizza._id} pizza={pizza} />
                ))}
            </div>
        </div>
    )
}

export default PizzaList;
