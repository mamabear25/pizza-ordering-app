import styles from '../styles/BurgerCard.module.css';
import Image from "next/image";
import Link from "next/link";

const BurgerCard = ({ burger }) => {
    return (
        <div className={styles.container}>
            <Link href={`/burger/${burger._id}`} passHref>
                <Image src={burger.img} alt="" width="300" height="300"/>
            </Link>
            <h1 className={styles.title}>{burger.title}</h1>
            <span className={styles.price}>&#8358;{burger.prices[0]}</span>
            <p className={styles.desc}>{burger.desc}</p>
        </div>
    );
};

export default BurgerCard;