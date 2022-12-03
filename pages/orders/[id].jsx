import styles from "../../styles/Order.module.css";
import Image from "next/image";

const Order = () => {

    const status = 0;

    const statusClass = (index) => {
        if(index - status < 1) return styles.done
        if(index - status ===  1) return styles.inProgress
        if(index - status > 1) return styles.undone
    }
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.row}>
                    <table className={styles.table}>
                        <tr className={styles.trTitle}>
                            <th>Order ID</th>
                            <th>Customer</th>
                            <th>Address</th>
                            <th>Total</th>
                        </tr>
                        <tr className={styles.tr}>
                            <td>
                                <span className={styles.id}>76847938234564</span>
                            </td>
                            <td>
                                <span className={styles.name}>
                                    Obioko Okonkwo
                                </span>  
                            </td> 
                            <td>
                                <span className={styles.address}>6, Admiralty rd, Lekki</span>
                            </td>
                            <td>
                                <span className={styles.total}>14000</span>
                            </td>
                        </tr>
                    </table>
                </div>
                <div className={styles.row}>
                    <div className={statusClass(0)}>
                        <Image src="/img/atm.png"  width={30} height={30} alt="" />
                        <span>Payment</span>
                        <div className={styles.checked}>
                            <Image className={styles.checkIcon} src="/img/paid.png"  width={30} height={30} alt="" />
                        </div>
                    </div>
                    <div className={statusClass(1)}>
                        <Image src="/img/bake.png"  width={30} height={30} alt="" />
                        <span>Preparing</span>
                        <div className={styles.checked}>
                            <Image className={styles.checkIcon} src="/img/checked.png"  width={30} height={30} alt="" />
                        </div>
                    </div>
                    <div className={statusClass(2)}>
                        <Image src="/img/delivery.png"  width={30} height={30} alt="" />
                        <span>Any Minute now</span>
                        <div className={styles.checked}>
                            <Image className={styles.checkIcon} src="/img/checked.png"  width={30} height={30} alt="" />
                        </div>
                    </div>
                    <div className={statusClass(3)}>
                        <Image src="/img/delivered.png"  width={30} height={30} alt="" />
                        <span>Delivered</span>
                        <div className={styles.checked}>
                            <Image className={styles.checkIcon} src="/img/checked.png"  width={30} height={30} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.wrapper}>
                    <h2 className={styles.title}>CART TOTAL</h2>
                    <div className={styles.totaltext}>
                        <b className={styles.totaltextTitle}>Subtotal:</b>14000
                    </div>
                    <div className={styles.totaltext}>
                        <b className={styles.totaltextTitle}>Discount:</b>0.00
                    </div>
                    <div className={styles.totaltext}>
                        <b className={styles.totaltextTitle}>Total:</b>14000
                    </div>
                    <button disabled className={styles.button}>PAID</button>
                </div>
            </div>
        </div>
    )
}

export default Order;