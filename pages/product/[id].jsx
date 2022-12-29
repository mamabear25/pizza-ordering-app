import styles from "../../styles/Product.module.css";
import Image from "next/image";
import axios from "axios"
import { useState } from "react";
import { useDispatch } from "react-redux";
import {addProduct} from "../../redux/cartSlice";
import Link from "next/link";

const Product = ({ pizza }) => {
    const [price, setPrice] = useState(pizza.prices[0]);
    const [size, setSize] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [extras, setExtras] = useState([]);
    const dispatch = useDispatch();
    
    const changePrice = (number) => {
        setPrice(price + number);
    };

    const handleSize = (sizeIndex) => {
        const diff = pizza.prices[sizeIndex] - pizza.prices[size];
        setSize(sizeIndex);
        changePrice(diff);
    };

    const handleChange = (e, options) => {
        const checked = e.target.checked;

        if (checked) {
            changePrice(options.price)
            setExtras((prev) => [...prev, options]);
        } else {
            changePrice(-options.price)
            setExtras(extras.filter((extra) => extra._id !== options._id));
        }
    };

    const handleClick = () => {
        dispatch(addProduct({...pizza, extras, price, quantity}));
    };

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.imgContainer}>
                    <Image src={pizza.img} alt="" objectFit="contain" layout="fill" className={styles.img}/>
                </div>
            </div>
            <div className={styles.right}>
                <h1 className={styles.title}>{pizza.title}</h1>
                <span className={styles.price}>&#8358;{price}</span>
                <p className={styles.desc}>{pizza.desc}</p>
                <h3 className={styles.choose}>Choose desired size</h3>
                <div className={styles.sizes}>
                    <div className={styles.size} onClick={() =>handleSize(0)}>
                        <Image src="/img/size.png" layout="fill" alt="" />
                        <span className={styles.number}>Small</span>
                    </div>
                    <div className={styles.size} onClick={() =>handleSize(1)}>
                        <Image src="/img/size.png" layout="fill" alt="" />
                        <span className={styles.number}>Medium</span>
                    </div>
                    <div className={styles.size} onClick={() =>handleSize(2)}>
                        <Image src="/img/size.png" layout="fill" alt="" />
                        <span className={styles.number}>Large</span>
                    </div>
                </div>
                <h3 className={styles.choose}>What topping(s) would you like?</h3>
                <div className={styles.toppings}>
                    {pizza.extraOptions.map((options) => (
                    <div className={styles.options} key={options._id}>
                        <input 
                        type="checkbox" 
                        id={options.text} 
                        name={options.text} 
                        className={styles.checkbox}
                        onChange={(e) =>handleChange(e, options)}
                        />
                        <label htmlFor="cheese">{options.text}</label>
                    </div>
                    ))}
                </div>
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
                        <Link href="/pizzas" passHref>
                            <div className={styles.title}>
                            <li className={styles.listItem}>More Pizzas</li>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const getServerSideProps = async ({ params }) => {
    const res = await axios.get(`https://pizza-jgk6hlx9v-mamabear25.vercel.app/api/products/${params.id}`);
    return{
      props:{
        pizza: res.data,
      },
    };
};

export default Product;