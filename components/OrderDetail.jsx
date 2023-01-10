import  styles from "../styles/OrderDetail.module.css";
import { useState} from "react";

const OrderDetail = ( { total, createOrder }) => {
    const [customer, setCustomer] = useState("")
    const [address, setAddress] = useState("")

    const handleClick = () => {
        createOrder({customer, address, total, method: 0 });
    };

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>DELIVERY FEE IS &#8358;2500</h1>
                <div className={styles.item}>
                    <label className={styles.label}>Name</label>
                    <input 
                    placeholder="John Doe" 
                    type="text" 
                    className={styles.input} 
                    onChange={(e) => setCustomer(e.target.value)}
                    />
                </div>
                <div className={styles.item}>
                    <label className={styles.label}>Phone Number</label>
                    <input 
                    placeholder="08123456789" 
                    type="text" 
                    className={styles.input} 
                    />
                </div>
                <div className={styles.item}>
                    <label className={styles.label}>Address</label>
                    <textarea 
                    rows={5} 
                    placeholder="27 chevron drive, Lekki" 
                    type="text" 
                    className={styles.textarea} 
                    onChange={(e) => setAddress(e.target.value)}
                    />
                </div>
                <button className={styles.button} onClick={handleClick}>
                    Order
                </button>
            </div>
        </div>
    );
};

export default OrderDetail;

