import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";

const PizzaList = ({ pizzaList }) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>techMomma's Pizza</h1>
            <p className={styles.desc}>
                lorem ipsum dolor sit amet conecteur auris sed dignissim ipsum
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
