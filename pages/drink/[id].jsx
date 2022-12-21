import styles from "../../styles/Product.module.css";
import Image from "next/image";
import axios from "axios"
import { useState } from "react";
import { useDispatch } from "react-redux";
import {addProduct} from "../../redux/cartSlice";
import Link from "next/link";

const Burger = ({ drink }) => {
    const [price, setPrice] = useState(drink.price);
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(addProduct({...drink, price, quantity}));
    };

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.imgContainer}>
                    <Image src={drink.img} alt="" objectFit="contain" layout="fill" />
                </div>
            </div>
            <div className={styles.right}>
                <h1 className={styles.title}>{drink.title}</h1>
                <span className={styles.price}>&#8358;{price}</span>
                <p className={styles.desc}>{drink.desc}</p>
                <div className={styles.add}>
                    <input 
                    onChange={(e) => setQuantity(e.target.value)} 
                    type="number" 
                    defaultValue={1} 
                    className={styles.quantity} 
                    />
                    <button className={styles.button} onClick={handleClick}>
                        Add to Cart
                    </button>
                    <div className={styles.more}>
                        <Link href="/drinks" passHref>
                            <div className={styles.title}>
                            <li className={styles.listItem}>More drinks?</li>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const getServerSideProps = async ({ params }) => {
    const res = await axios.get(`http://localhost:3000/api/drinks/${params.id}`);
    return{
      props:{
        drink: res.data,
      },
    };
};

export default Burger;