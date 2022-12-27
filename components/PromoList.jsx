import styles from "../styles/PromoList.module.css";
import PromoCard from "./PromoCard";
import {useState, useEffect} from "react"
import axios from "axios";

const PromoList = () => {
    const [promoList, setPromoList] = useState([]);

    const getPromoList = async () => {
    const res = await axios.get("https://pizza-ordering-8f1q08h0h-mamabear25.vercel.app/api/promos", {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          "Access-Control-Allow-Headers": "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" ,
          "Access-Max-Age": "86400"
        }
      });

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
