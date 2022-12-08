import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import { useSelector } from "react-redux";
import Link from "next/link";


const Navbar = () => {
    const quantity = useSelector((state) => state.cart.quantity);
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.callButton}>
                    <Image src="/img/Telephone-PNG-Picture.png" alt="" width="30" height="30"/>
                </div>
                <div className={styles.texts}>
                    <div className={styles.text}>ORDER NOW!</div>
                    <div className={styles.text}>081 234 567 890</div>
                </div>
            </div>
            <div className={styles.item}>
                <ul className={styles.list}>
                    <Link href="/" passHref>
                        <li className={styles.listItem}>HomePage</li>
                    </Link>
                    <Link href="/pizzas" passHref>
                        <li className={styles.listItem}>Pizzas</li>
                    </Link>
                    <li className={styles.listItem}>Menu</li>
                    <Image src="/img/logo.png" alt="" width="150" height="150"/>
                    <li className={styles.listItem}>Events</li>
                    <Link href="/burgers" passHref>
                        <li className={styles.listItem}>Burgers</li>
                    </Link>
                    <Link href="/promos" passHref>
                        <li className={styles.listItem}>Promos</li>
                    </Link>
                    <Link href="/admin" passHref>
                        <li className={styles.listItem}>Admin</li>
                    </Link>
                </ul>
            </div>
            <Link href="/cart" passHref>
                <div className={styles.item}>
                    <div className={styles.cart}>
                        <Image src="/img/cart.png" alt="" width="50" height="50"/>
                        <div className={styles.counter}>{quantity}</div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Navbar