import styles from "../styles/AdminDashboard.module.css";
import { useUser } from '@auth0/nextjs-auth0/client';
import Link from "next/link"

const Admin = () => {
    const { user, isLoading } = useUser(); 
    return (
        <div className={styles.container}>
            {user && (
                <>
                <div className={styles.name}>
                    <p>Here are actions you can perform:</p>
                </div>
                <div className={styles.wrapper}>
                <div className={styles.dir}>
                        <div className={styles.list}>
                            <ul className={styles.listItem}>
                                <li>Post new Pizza</li>
                                <li>Post new Burger</li>
                                <li>Post new Drink</li>
                                <li>Post new promo</li>
                            </ul>
                        </div>
                        <div className={styles.link}>
                            <Link href="/create" passHref>
                                <h1 className={styles.title}>Post Products</h1>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.dir}>
                        <div className={styles.list}>
                            <ul className={styles.listItem}>
                                <li>Payment</li>
                                <li>Preparing</li>
                                <li>Any minute Now</li>
                                <li>Delivered</li>
                            </ul>
                        </div>
                        <div className={styles.link}>
                            <Link href="/orders" passHref>
                                <h1 className={styles.title}>Check Orders</h1>
                            </Link>
                        </div>
                    </div>
                    <div className={styles.dir}>
                        <div className={styles.list}>
                            <ul className={styles.listItem}>
                                <li>
                                    Deleting Products
                                </li>
                                <p>Clicking <b>Delete</b> cannot be undone.</p>
                            </ul>
                        </div>
                        <div className={styles.link}>
                            <Link href="/products" passHref>
                                <h1 className={styles.title}>Delete Products</h1>
                            </Link>
                        </div>
                    </div>
                </div>
                </> 
            )}        
        </div>
    );  
};

export default Admin;