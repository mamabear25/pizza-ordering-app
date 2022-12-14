import styles from "../../styles/Product.module.css";
import Image from "next/image";
import axios from "axios"
import { useState } from "react";
import { useDispatch } from "react-redux";
import {addProduct} from "../../redux/cartSlice";
import Link from "next/link";

const Burger = ({ burger }) => {
    const [price, setPrice] = useState(burger.prices[0]);
    const [size, setSize] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [extras, setExtras] = useState([]);
    const dispatch = useDispatch();
    
    const changePrice = (number) => {
        setPrice(price + number);
    };

    const handleSize = (sizeIndex) => {
        const diff = burger.prices[sizeIndex] - burger.prices[size];
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
        dispatch(addProduct({...burger, extras, price, quantity}));
    };

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.imgContainer}>
                    <Image src={burger.img} alt="" objectFit="contain" layout="fill" />
                </div>
            </div>
            <div className={styles.right}>
                <h1 className={styles.title}>{burger.title}</h1>
                <span className={styles.price}>&#8358;{price}</span>
                <p className={styles.desc}>{burger.desc}</p>
                <h3 className={styles.choose}>Choose desired size</h3>
                <div className={styles.sizes}>
                    <div className={styles.size} onClick={() =>handleSize(0)}>
                        <Image src="/img/size.png" layout="fill" alt="" />
                        <span className={styles.number}>Regular</span>
                    </div>
                    <div className={styles.size} onClick={() =>handleSize(1)}>
                        <Image src="/img/size.png" layout="fill" alt="" />
                        <span className={styles.number}>Double Decker</span>
                    </div>
                    <div className={styles.size} onClick={() =>handleSize(2)}>
                        <Image src="/img/size.png" layout="fill" alt="" />
                        <span className={styles.number}>Triple Decker</span>
                    </div>
                </div>
                <h3 className={styles.choose}>What topping(s) would you like?</h3>
                <div className={styles.toppings}>
                    {burger.extraOptions.map((options) => (
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
                        <Link href="/burgers" passHref>
                            <div className={styles.title}>
                            <li className={styles.listItem}>More Burger</li>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const getServerSideProps = async ({ params }) => {
    const res = await axios.get(`https://pizza-jgk6hlx9v-mamabear25.vercel.app/api/burgers/${params.id}`);
    return{
      props:{
        burger: res.data,
      },
    };
};

export default Burger;