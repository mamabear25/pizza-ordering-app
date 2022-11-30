import styles from "../../styles/Product.module.css";
import Image from "next/image";
import { useState } from "react";

const Product = () => {
    const [size, setSize] = useState(0)
    const pizza = {
        id: 1,
        img: "/img/pizza.png",
        name: "ririola",
        price: [3500, 4500, 6000],
        desc: "Lorem ipsum dolor sit amet, consectur adipiscing elit. duid arcu lamna dhvsgjs sjdbsygv dhbysgja there oncd was a ship tht put ti birth the name of the ship was the belly of teas the once that blew"
    };

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.imgContainer}>
                    <Image src={pizza.img} alt="" objectFit="contain" layout="fill" />
                </div>
            </div>
            <div className={styles.right}>
                <h1 className={styles.title}>{pizza.name}</h1>
                <span className={styles.price}>&#8358;{pizza.price[size]}</span>
                <p className={styles.desc}>{pizza.desc}</p>
                <h3 className={styles.choose}>Choose desired size</h3>
                <div className={styles.sizes}>
                    <div className={styles.size} onClick={() =>setSize(0)}>
                        <Image src="/img/size.png" layout="fill" alt="" />
                        <span className={styles.number}>Small</span>
                    </div>
                    <div className={styles.size} onClick={() =>setSize(1)}>
                        <Image src="/img/size.png" layout="fill" alt="" />
                        <span className={styles.number}>Medium</span>
                    </div>
                    <div className={styles.size} onClick={() =>setSize(2)}>
                        <Image src="/img/size.png" layout="fill" alt="" />
                        <span className={styles.number}>Large</span>
                    </div>
                </div>
                <h3 className={styles.choose}>What topping(s) would you like?</h3>
                <div className={styles.toppings}>
                    <div className={styles.options}>
                        <input type="checkbox" id="sausage" name="sausage" className={styles.checkbox}/>
                        <label htmlFor="sausage">Sausage</label>
                    </div>
                    <div className={styles.options}>
                        <input type="checkbox" id="mushrooms" name="mushrooms" className={styles.checkbox}/>
                        <label htmlFor="mushrooms">Mushrooms</label>
                    </div>
                    <div className={styles.options}>
                        <input type="checkbox" id="bacon" name="bacon" className={styles.checkbox}/>
                        <label htmlFor="bacon">Bacon</label>
                    </div>
                    <div className={styles.options}>
                        <input type="checkbox" id="cheese" name="cheese" className={styles.checkbox}/>
                        <label htmlFor="cheese">Extra Cheese</label>
                    </div>
                    <div className={styles.options}>
                        <input type="checkbox" id="chicken" name="chicken" className={styles.checkbox}/>
                        <label htmlFor="chicken">Chicken</label>
                    </div>
                    <div className={styles.options}>
                        <input type="checkbox" id="pepperoni" name="pepperoni" className={styles.checkbox}/>
                        <label htmlFor="pepperoni">Pepperoni</label>
                    </div>
                    <div className={styles.options}>
                        <input type="checkbox" id="olives" name="olives" className={styles.checkbox}/>
                        <label htmlFor="olives">Black Olives</label>
                    </div>
                    <div className={styles.options}>
                        <input type="checkbox" id="suya" name="suya" className={styles.checkbox}/>
                        <label htmlFor="suya">Beef Suya</label>
                    </div>
                    <div className={styles.options}>
                        <input type="checkbox" id="onions" name="onions" className={styles.checkbox}/>
                        <label htmlFor="onions">Onions</label>
                    </div>
                    <div className={styles.options}>
                        <input type="checkbox" id="tomato" name="tomato" className={styles.checkbox}/>
                        <label htmlFor="tomato">Tomato and Basil Pork</label>
                    </div>
                </div>
                <div className={styles.add}>
                    <input type="number" defaultValue={1} className={styles.quantity} />
                    <button className={styles.button}>Add to Cart</button>
                </div>

            </div>
        </div>
    )
};

export default Product ;