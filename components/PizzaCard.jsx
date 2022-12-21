import styles from '../styles/PizzaCard.module.css';
import Image from "next/image";
import Link from "next/link";

const PizzaCard = ({ pizza }) => {
    return (
        <div className={styles.container}>
            <div className={styles.zoom}>
                <Link href={`/product/${pizza._id}`} passHref>
                    <Image src={pizza.img} alt="" width="300" height="300"/>
                </Link>
            </div>
            <h1 className={styles.title}>{pizza.title}</h1>
            <span className={styles.price}>&#8358;{pizza.prices[0]}</span>
        </div>
    );
};

export default PizzaCard;
