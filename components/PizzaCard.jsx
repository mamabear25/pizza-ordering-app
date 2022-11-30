import styles from '../styles/PizzaCard.module.css';
import Image from "next/image";


const PizzaCard = () => {
    return (
        <div className={styles.container}>
            <Image src="/img/pizza2.png" alt="" width="300" height="300"/>
            <h1 className={styles.title}>FIORI DI ZUCCA</h1>
            <span className={styles.price}>#3,500</span>
            <p className={styles.desc}>Lorem ipsum dolor sit amet consectur adipisicing elit.</p>
        </div>
    )
};

export default PizzaCard