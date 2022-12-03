import PizzaCard from "./PizzaCard";
import styles from "../styles/PizzaList.module.css";

const PizzaList = ({ pizzaList }) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>ALT_ PIZZA</h1>
            <p className={styles.desc}>
                auris sed dignissim ipsum, ultrices consectetur dui. Vestibulum augue eros,
                commodo eu leo vitae, placerat iaculis ante. Morbi dignissim, urna at dapibus volutpat, mi massa finibus mi,
                vitae volutpat urna purus quis massa.
            </p>
            <div className={styles.wrapper}>
                {pizzaList.map((pizza) => (
                    <PizzaCard key={pizza._id} pizza={pizza} />
                ))}
            </div>
        </div>
    );
};

export default PizzaList;