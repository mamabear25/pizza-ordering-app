import styles from "../styles/Admin.module.css";
import Image from "next/image";
import axios from "axios";
import { useUser } from '@auth0/nextjs-auth0/client';
import { useState, useEffect } from "react";
import EditPizzaButton from "../components/EditPizzaButton";
import EditPizza from "../components/EditPizza";
// import EditDrinksButton from "../components/EditDrinksButton";
// import EditDrinks from "../components/EditDrinks";
// import EditPromoButton from "../components/EditPromoButton";
// import EditPromo from "../components/EditPromo";
// import EditBurgerButton from "../components/EditBurgerButton";
// import EditBurger from "../components/EditBurger";


const AllProducts = () => {
    const [closePizza, setPizzaClose] = useState(true);
    const [closeBurger, setBurgerClose] = useState(true);
    const [closePromo, setPromoClose] = useState(true);
    const [closeDrink, setDrinkClose] = useState(true);
    const { user, error, isLoading } = useUser();
    const [productList, setProductList] = useState([]);
    const [promoList, setPromoList] = useState([]);
    const [burgerList, setBurgerList] = useState([]);
    const [drinkList, setDrinkList] = useState([]);
    const [product, setProduct] = useState("")

    //  get products
    const getproductList = async (id) => {
        const res = await axios.get("http://localhost:3000/api/products");
    
        setProductList(res.data);
    };
    
    useEffect(() => {
        getproductList();
    }, []);

    // get promos
    const getpromoList = async () => {
        const res = await axios.get("http://localhost:3000/api/promos");
    
        setPromoList(res.data);
    };
    
    useEffect(() => {
        getpromoList();
    }, []);

    // get burgers
    const getburgerList = async () => {
        const res = await axios.get("http://localhost:3000/api/burgers");
    
        setBurgerList(res.data);
    };
    
    useEffect(() => {
        getburgerList();
    }, []);

    // get drinks
    const getdrinkList = async () => {
        const res = await axios.get("http://localhost:3000/api/drinks");
    
        setDrinkList(res.data);
    };
    
    useEffect(() => {
        getdrinkList();
    }, []);


    // delete product
    const handlePizzaDelete = async (id) => {
        try{
            const res = await axios.delete("http://localhost:3000/api/products/" + id);
            setProductList(productList.filter((pizza) => pizza._id !== id));
        }catch (err) {
            console.log(err)
        }
    };

    // delete burger
    const handleBurgerDelete = async (id) => {
        try{
            const res = await axios.delete("http://localhost:3000/api/burgers/" + id);
            setBurgerList(burgerList.filter((burger) => burger._id !== id));
        }catch (err) {
            console.log(err)
        }
    };

    // delete promo
    const handlePromoDelete = async (id) => {
        try{
            const res = await axios.delete("http://localhost:3000/api/promos/" + id);
            setPromoList(promoList.filter((promo) => promo._id !== id));
        }catch (err) {
            console.log(err)
        }
    };

    // delete drinks
    const handleDrinkDelete = async (id) => {
        try{
            const res = await axios.delete("http://localhost:3000/api/drinks/" + id);
            setDrinkList(drinkList.filter((drink) => drink._id !== id));
        }catch (err) {
            console.log(err)
        }
    };
    

    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <h1 className={styles.title}>PIZZAS</h1>
                <table className={styles.table}>
                    <tbody>
                        <tr className={styles.trTitle}>
                            <th>Image</th>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </tbody>
                    {productList.map((product) => (
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
                                    {/* <div className={styles.align}> */}
                                        {/* {<EditPizzaButton setPizzaClose={setPizzaClose}/>} */}
                                        <button className={styles.button} onClick={()=>handlePizzaDelete(product._id)}>Delete</button>
                                        {/* {!closePizza && <EditPizza setPizzaClose={setPizzaClose} />} */}
                                    {/* </div> */}
                                </td>
                        </tr>
                    </tbody>
                    ))}
                </table>
                <div className={styles.item}>
                    <h1 className={styles.title}>BURGERS</h1>
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
                        {burgerList.map((burger) => (
                        <tbody key={burger._id}>
                            <tr className={styles.trTitle}>
                                <td>
                                    <Image 
                                        src={burger.img}
                                        width={100}
                                        height={100}
                                        objectFit="cover"
                                        alt=""
                                    />
                                </td>
                                <td>{burger._id.slice(0, 5)}...</td>
                                <td>{burger.title}</td>
                                <td>{burger.prices[0]}</td>
                                <td>
                                    <div className={styles.align}>
                                        {/* {<EditBurgerButton setBurgerClose={setBurgerClose}/>} */}
                                        <button className={styles.button} onClick={()=>handleBurgerDelete(burger._id)}>Delete</button>
                                        {/* {!closeBurger && <EditBurger setBurgerClose={setBurgerClose} />} */}
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                        ))}
                    </table>
                </div>
                <div className={styles.item}>
                    <h1 className={styles.title}>Promos</h1>
                    <table className={styles.table}>
                        <tbody>
                            <tr className={styles.trTitle}>
                                <th>Image</th>
                                <th>Id</th>
                                <th>Title</th>
                            </tr>
                        </tbody>
                        {promoList.map((promo) => (
                        <tbody key={promo._id}>
                            <tr className={styles.trTitle}>
                                <td>
                                    <Image 
                                        src={promo.img}
                                        width={100}
                                        height={100}
                                        objectFit="cover"
                                        alt=""
                                    />
                                </td>
                                <td>{promo._id}</td>
                                <td>{promo.title}</td>
                                <td>
                                    <div className={styles.align}>
                                        {/* {<EditPromoButton setPromoClose={setPromoClose}/>} */}
                                        <button className={styles.button} onClick={()=>handlePromoDelete(promo._id)}>Delete</button>
                                        {/* {!closePromo && <EditPromo setPromoClose={setPromoClose} />} */}
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                        ))}
                    </table>
                    <div className={styles.item}>
                        <h1 className={styles.title}>DRINKS</h1>
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
                            {drinkList.map((drink) => (
                                <tbody key={drink._id}>
                                    <tr className={styles.trTitle}>
                                        <td>
                                            <Image 
                                                src={drink.img}
                                                width={100}
                                                height={100}
                                                objectFit="cover"
                                                alt=""
                                            />
                                        </td>
                                        <td>{drink._id.slice(0, 5)}...</td>
                                        <td>{drink.title}</td>
                                        <td>{drink.price}</td>
                                        <td>
                                            <div className={styles.align}>
                                                {/* {<EditDrinksButton setDrinkClose={setDrinkClose}/>} */}
                                                <button className={styles.button} onClick={()=>handleDrinkDelete(drink._id)}>Delete</button>
                                                {/* {!closeDrink && <EditDrinks setDrinkClose={setDrinkClose} />} */}
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            ))}
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export const getServerSideProps = async () => {
    const productRes = await axios.get("http://localhost:3000/api/products");
    const orderRes = await axios.get("http://localhost:3000/api/orders");
    const promoRes = await axios.get("http://localhost:3000/api/promos");
    const burgerRes = await axios.get("http://localhost:3000/api/burgers");
    const drinkRes = await axios.get("http://localhost:3000/api/drinks");

    return{
        props: {
            orders: orderRes.data,
            products: productRes.data,
            promos: promoRes.data,
            burgers: burgerRes.data,
            drinks: drinkRes.data,
        },
    };
}

export default AllProducts;