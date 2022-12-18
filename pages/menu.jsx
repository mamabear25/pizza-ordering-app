import styles from "../styles/Menu.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
        <div className={styles.wrapper}>
            <div className={styles.item}>
                <div className={styles.menu}>
                    <h1 className={styles.header}>Our Menu</h1>
                    <p className={styles.text}>
                        With more than 15 years of experience, we have created a multitude of recipes among which you will inevitably find what you are looking for.
                    </p>
                    <p className={styles.text}>Pizza for everyone!</p>
                    <p className={styles.text}>Burger for every mood!</p>
                    <p className={styles.text}>Don't forget to check out with a chilled drinks.</p>
                </div>
                <div className={styles.menu}>
                    <Image src="" alt="" />
                </div>
            </div>
            <div className={styles.link}>
                <div className={styles.imgWrapper}>
                <Link href="/pizzas" passHref>
                    <Image src="/img/plink.png" alt="" width="340" height="280"/>
                    <div className={styles.title}>
                        <li className={styles.listItem}>PIZZAS</li>
                    </div>
                </Link>
                </div>
                <div className={styles.imgWrapper}>
                    <Link href="/burgers" passHref>
                        <Image src="/img/burgerlink.png" alt="" width="340" height="280"/>
                        <div className={styles.title}>
                            <li className={styles.listItem}>BURGERS</li>
                        </div>
                    </Link>
                </div>
                <div className={styles.imgWrapper}>
                    <Link href="/drinks" passHref>
                        <Image src="/img/drinklink.png" alt="" width="340" height="280"/>
                        <div className={styles.title}>
                            <li className={styles.listItem}>DRINKS</li>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  );
}
