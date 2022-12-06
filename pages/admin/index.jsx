import styles from "../../styles/Admin.module.css";
import Image from "next/image";
import axios from "axios";
import { useState } from "react";

const Index = ({ orders, products }) => {
    const [pizzaList, setPizzaList] = useState(products);
    const [orderList, setOrderList] = useState(orders);
    const status = ["preparing", "enroute", "delivered"]

    const handleDelete = async (id) => {
        try{
            const res = await axios.delete("http://localhost:3000/api/products/" + id);
            setPizzaList(pizzaList.filter((pizza) => pizza._id !== id));
        }catch (err) {
            console.log(err)
        }
    };

    const handleStatus = async (id) => {
        // for each order, we're searching for the order_id which equals the id we want to update, this will return another array and we'll take just the first item
        const item = orderList.filter((order) => order._id === id)[0]
        
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
        <div className={styles.container}>
            <div className={styles.item}>
                <h1 className={styles.title}>Products</h1>
                <table className={styles.table}>
                    <tbody>
                        <tr className={styles.trTitle}>
                            <th>Image</th>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </tbody>
                    {pizzaList.map((product) => (
                    <tbody key={product._id}>
                        <tr className={styles.trTitle}>
                            <td>
                                <Image 
                                    src={product.img}
                                    width={100}
                                    height={100}
                                    objectFit="cover"
                                    alt=""
                                />
                            </td>
                            <td>{product._id.slice(0, 5)}...</td>
                            <td>{product.title}</td>
                            <td>{product.prices[0]}</td>
                            <td>
                                <button className={styles.button}>Edit</button>
                                <button className={styles.button} onClick={()=>handleDelete(product._id)}>Delete</button>
                            </td>
                        </tr>
                    </tbody>
                    ))}
                </table>
            </div>
            <div className={styles.item}>
            <h1 className={styles.title}>Orders</h1>
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
        </div>
    );
};

export const getServerSideProps = async () => {
    const productRes = await axios.get("http://localhost:3000/api/products");
    const orderRes = await axios.get("http://localhost:3000/api/orders")

    return{
        props: {
            orders: orderRes.data,
            products: productRes.data,
        },
    };
};

export default Index;