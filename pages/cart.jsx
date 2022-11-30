import styles from "../styles/Cart.module.css";
import Image from "next/image";

const Cart = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <table className={styles.table}>
                    <tr className={styles.tr}>
                        <th>Product</th>
                        <th>Name</th>
                        <th>Extras</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.imgContainer}>
                                <Image src="/img/pizza.png" alt="" layout="fill" objectFit="cover" />
                            </div>
                        </td>
                        <td>
                            <span className={styles.name}>Coralzo</span>
                        </td>
                        <td>
                            <span className={styles.extras}>
                                Sausage
                                Mushrooms
                            </span>  
                        </td> 
                        <td>
                            <span className={styles.price}>3500</span>
                        </td>
                        <td>
                            <span className={styles.quantity}>2</span>
                        </td>
                        <td>
                            <span className={styles.total}>7000</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.imgContainer}>
                                <Image src="/img/pizza.png" alt="" layout="fill" objectFit="cover" />
                            </div>
                        </td>
                        <td>
                            <span className={styles.name}>Coralzo</span>
                        </td>
                        <td>
                            <span className={styles.extras}>
                                Sausage
                                Mushrooms
                            </span>  
                        </td> 
                        <td>
                            <span className={styles.price}>3500</span>
                        </td>
                        <td>
                            <span className={styles.quantity}>2</span>
                        </td>
                        <td>
                            <span className={styles.total}>7000</span>
                        </td>
                    </tr>
                </table>
            </div>
            <div className={styles.right}>
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>CART TOTAL</h2>
                    <div className={styles.totaltext}>
                        <b className={styles.totaltextTitle}>Subtotal:</b>7000
                    </div>
                    <div className={styles.totaltext}>
                        <b className={styles.totaltextTitle}>Discount:</b>0.00
                    </div>
                    <div className={styles.totaltext}>
                        <b className={styles.totaltextTitle}>Total:</b>7000
                    </div>
                    <button className={styles.button}>CHECKOUT NOW</button>
                </div>
            </div>
        </div>
    )
}

export default Cart
