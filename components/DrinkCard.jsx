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
            <h1 className={styles.title}>{drink.title}</h1>
            <span className={styles.price}>&#8358;{drink.price}</span>
        </div>
    );
};

export default DrinkCard;