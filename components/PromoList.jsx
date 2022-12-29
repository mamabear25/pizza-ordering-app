import styles from "../styles/PromoList.module.css";
import PromoCard from "./PromoCard";
import {useState, useEffect} from "react"
import axios from "axios";

const PromoList = () => {
    const [promoList, setPromoList] = useState([]);

    const getPromoList = async () => {
    const res = await axios.get("https://pizza-jgk6hlx9v-mamabear25.vercel.app/api/promos");

    setPromoList(res.data);
    };

    useEffect(() => {
        getPromoList();
    }, []);

    return (
        <div className={styles.container}>
            <p className={styles.desc}>
                Order Now
            </p>
            <div className={styles.wrapper}>
                {promoList.map((promo) => (
                <PromoCard key={promo._id} promo={promo} />
                ))}
            </div>
        </div>
    )
}

export default PromoList;
