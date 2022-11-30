import PizzaCard from "./PizzaCard";
import styles from "../styles/ProductList.module.css";

const ProductList = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>ALT_ PIZZA</h1>
            <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu sem in turpis lacinia laoreet.
            Sed dui nibh, malesuada a metus sit amet, auctor mattis metus. In consectetur pulvinar metus, vel
            luctus urna bibendum scelerisque. Duis quam turpis, ullamcorper sit amet sapien sit amet, commodo
            posuere quam. Aenean interdum imperdiet erat sit amet tempus. Pellentesque tempus orci ac mauris
            consectetur ornare. Cras aliquam ullamcorper metus, quis ultrices metus convallis vitae. Proin
            semper posuere magna, tempus pulvinar sem iaculis vel. Nullam ullamcorper orci vel dolor malesuada feugiat.
            Nulla tincidunt maximus eros blandit facilisis. Proin mattis ac libero eu pharetra. Interdum et malesuada fames
            ac ante ipsum primis in faucibus. Mauris sed dignissim ipsum, ultrices consectetur dui. Vestibulum augue eros,
            commodo eu leo vitae, placerat iaculis ante. Morbi dignissim, urna at dapibus volutpat, mi massa finibus mi,
            vitae volutpat urna purus quis massa.
            </p>
            <div className={styles.wrapper}>
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
                <PizzaCard />
            </div>
        </div>
    )
};

export default ProductList