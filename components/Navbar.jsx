import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import { useSelector } from "react-redux";
import Link from "next/link";
import { useUser } from '@auth0/nextjs-auth0/client';

const Navbar = () => {
    const { user, isLoading } = useUser();
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
                        <li className={styles.listItem}>Home</li>
                    </Link>
                    <Link href="/menu" passHref>
                        <li className={styles.listItem}>Menu</li>
                    </Link>
                    <Image src="/img/logo.png" alt="" width="150" height="150"/>
                    <li className={styles.listItem}>Contact</li>
                    {user && (
                    <>
                    <Link href="/promos" passHref>
                        <li className={styles.listItem}>Promos</li>
                    </Link>
                    <Link href="/admin" passHref>
                        <li className={styles.listItem}>Admin</li>
                    </Link>
                    </>
                    )}
                    {!isLoading && !user && (
                    <Link href="/api/auth/login">
                        <li className={styles.listItem}>Login</li>
                    </Link>
                    )}
                    <br />
                    {user && (
                    <>
                    <Link href="/profile" icon="user" >
                        <li className={styles.listItem}>Profile </li>
                    </Link>
                    <Link
                        href="/api/auth/logout"
                        className="btn btn-link p-0"
                        icon="power-off">
                        <li className={styles.listItem}>Log out</li>
                    </Link>
                    </>
                    )}
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

export default Navbar;


