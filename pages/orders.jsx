import styles from "../styles/Admin.module.css";
import Image from "next/image";
import axios from "axios";
import { useUser } from '@auth0/nextjs-auth0/client';
import { useState, useEffect } from "react";

const AdminOrders = ({ orders }) => {
    const { user, error, isLoading } = useUser();
    const [orderList, setOrderList] = useState([]);
    const status = ["preparing", "enroute", "delivered"]


    // get all orders and status
    const handleStatus = async (id) => {
        // for each order, we're searching for the order_id which equals the id we want to update, this will return another array and we'll take just the first item
        const item = orderList.filter((order) => order._id === id)[0];
        const currentStatus = item.status
        
        try{
            const res = await axios.put("http://localhost:3000/api/orders/" + id, {
                status: currentStatus + 1,
            });
            setOrderList([
                res.data,
                // delete the previous version of the order..
                ...orderList.filter((order) => order._id !== id),
            ]);
        } catch (err) {
            console.log(err)
        }
    };

    return (
        <div className={styles.item}>
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
                {orderList.map((order)=>(
                <tbody key={order._id}>
                    <tr className={styles.trTitle}>
                        <td>{order.id.slice(0,5)}...</td>
                        <td>{order.customer}</td>
                        <td>{order.total}</td>
                        {/* check the order and payment method.. if it's 0[cash on delivery] if it's not 0[paypal]*/}
                        <td>{order.method === 0 ? (<span>Cash</span>) : (<span>paid</span>)}</td>
                        <td>{status[order.status]}</td>
                        <td>
                            <button onClick={()=>handleStatus(order._id)}>Next Stage</button>
                        </td>
                    </tr>
                </tbody>
                ))}
            </table>
        </div>
    )
}

export default AdminOrders;