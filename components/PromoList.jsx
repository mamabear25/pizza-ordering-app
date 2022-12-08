import styles from "../styles/PromoList.module.css";
import PromoCard from "./PromoCard";
import {useState, useEffect} from "react"
import axios from "axios";

const PromoList = () => {
    const [promoList, setPromoList] = useState([]);

    const getPromoList = async () => {
    const res = await axios.get("http://localhost:3000/api/promos");

    setPromoList(res.data);
    };

    useEffect(() => {
        getPromoList();
    }, []);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>DEALS</h1>
            <p className={styles.desc}>
                lorem ipsum dolor sit amet conecteur auris sed dignissim ipsum
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
