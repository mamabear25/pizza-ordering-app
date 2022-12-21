import styles from '../styles/DrinkCard.module.css';
import Image from "next/image";
import Link from "next/link";

const DrinkCard = ({ drink }) => {
    return (
        <div className={styles.container}>
            <div className={styles.zoom}>
                <Link href={`/drink/${drink._id}`} passHref>
                    <Image src={drink.img} alt="" width="300" height="300"/>
                </Link>
            </div>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>{drink.title}</h1>
                <span className={styles.price}>&#8358;{drink.prices[0]}</span>
            </div>
        </div>
    );
};

export default DrinkCard;