import styles from "../../styles/Order.module.css";
import Image from "next/image";
import axios from "axios";

const Order = ({ order }) => {
    // status returns the current status of the order once placed
    const status = order.status;

    const statusClass = (index) => {
        if(index - status < 1) return styles.done
        if(index - status ===  1) return styles.inProgress
        if(index - status > 1) return styles.undone
    };
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
                                <span className={styles.id}>{order._id}</span>
                            </td>
                            <td>
                                <span className={styles.name}>{order.customer}</span>  
                            </td> 
                            <td>
                                <span className={styles.address}>{order.address}</span>
                            </td>
                            <td>
                                <span className={styles.total}>&#8358;{order.total}</span>
                            </td>
                        </tr>
                    </table>
                </div>
                <div className={styles.row}>
                    <div className={statusClass(0)}>
                        <Image src="/img/atm.png"  width={30} height={30} alt="" />
                        <span>Payment</span>
                        <div className={styles.checked}>
                            <Image className={styles.checkIcon} src="/img/checked.png"  width={30} height={30} alt="" />
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
                        <b className={styles.totaltextTitle}>Subtotal:</b>&#8358;{order.total}
                    </div>
                    <div className={styles.totaltext}>
                        <b className={styles.totaltextTitle}>Discount:</b>0.00
                    </div>
                    <div className={styles.totaltext}>
                        <b className={styles.totaltextTitle}>Total:</b>&#8358;{order.total}
                    </div>
                    <button disabled className={styles.button}>PAID</button>
                </div>
            </div>
        </div>
    );
};

export const getServerSideProps = async ({ params }) => {
    const res = await axios.get(`https://pizza-jb1hwqmhw-mamabear25.vercel.app/api/orders/${params.id}`);
    return {
        props: { order: res.data },
    };
};

export default Order;