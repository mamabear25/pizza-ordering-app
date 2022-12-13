import styles from '../styles/DrinkCard.module.css';
import Image from "next/image";
import Link from "next/link";

const DrinkCard = ({ drink }) => {
    return (
        <div className={styles.container}>
            <Link href={`/drink/${drink._id}`} passHref>
                <Image src={drink.img} alt="" width="300" height="300"/>
            </Link>
            <h1 className={styles.title}>{drink.title}</h1>
            <span className={styles.price}>&#8358;{drink.price}</span>
            <p className={styles.desc}>{drink.desc}</p>
        </div>
    );
};

export default DrinkCard;