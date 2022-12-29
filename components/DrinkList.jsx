import styles from "../styles/DrinkList.module.css";
import DrinkCard from "./DrinkCard";
import {useState, useEffect} from "react"
import axios from "axios";

const DrinkList = () => {
    const [drinkList, setDrinkList] = useState([]);

    const getDrinkList = async () => {
    const res = await axios.get("http://localhost:3000/api/drinks");

    setDrinkList(res.data);
    };

    useEffect(() => {
        getDrinkList();
    }, []);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>techMomma&apos;s Drinks</h1>
            <p className={styles.desc}>
                We've got all the chilled, sizzling and fizzy drinks 
            </p>
            <div className={styles.wrapper}>
                {drinkList.map((drink) => (
                <DrinkCard key={drink._id} drink={drink} />
                ))}
            </div>
        </div>
    )
}

export default DrinkList;
