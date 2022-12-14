import styles from "../styles/CheckOrder.module.css";
import axios from "axios";
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import { useState, useEffect} from "react";

const AdminOrders = () => {
    const { user } = useUser();
    const [orders, setOrders] = useState([]);
    const status = ["preparing", "enroute", "delivered"]

    //  get products
    const getOrders = async () => {
        const res = await axios.get("https://pizza-jgk6hlx9v-mamabear25.vercel.app/api/orders");
    
        setOrders(res.data);
    };
    
    useEffect(() => {
        getOrders();
    }, []);

    // get all orders and status
    const handleStatus = async (id) => {
        // for each order, we're searching for the order_id which equals the id we want to update, this will return another array and we'll take just the first item
        const item = orders.filter((order) => order._id === id)[0];
        const currentStatus = item.status
        
        try{
            const res = await axios.put("https://pizza-jgk6hlx9v-mamabear25.vercel.app/api/orders/" + id, {
                status: currentStatus + 1,
            });
            setOrders([
                res.data,
                // delete the previous version of the order..
                ...orders.filter((order) => order._id !== id),
            ]);
        } catch (err) {
            console.log(err)
        }
    };

    return (
        <div className={styles.item}>
            {user["http://techmomma-fastfood.com/roles"].includes("Admin") &&(
            <>
            <h1 className={styles.title}>ORDERS</h1>
            <table className={styles.table}>
                <tbody>
                    <tr className={styles.trTitle}>
                        <th>OrderId</th>
                        <th>Customer</th>
                        <th>Total</th>
                        <th>Payment</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </tbody>
                {orders.map((order) => (
                    <tbody key={order._id}>
                        <tr className={styles.trTitle}>
                            <td>{order._id.slice(0, 5)}...</td>
                            <td>{order.customer}</td>
                            <td>{order.total}</td>
                            {/* check the order and payment method.. if it's 0[cash on delivery] if it's not 0[paypal]*/}
                            <td>{order.method === 0 ? (<span>Cash</span>) : (<span>paid</span>)}</td>
                            <td>{status[order.status]}</td>
                            <td>
                                <button onClick={() => handleStatus(order._id)}>Next Stage</button>
                            </td>
                        </tr>
                    </tbody>
                ))}
            </table>
            </>
            )}
        </div>
    );
};

export const getServerSideProps = async () => {
    const productRes = await axios.get("https://pizza-jgk6hlx9v-mamabear25.vercel.app/api/orders");
  
    return {
      props: {
        pizza: productRes.data,
      },
    };
  };
  

export default withPageAuthRequired(AdminOrders);
