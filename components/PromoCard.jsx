import styles from '../styles/PromoCard.module.css';
import Image from "next/image";
import Link from "next/link";

const PromoCard = ({ promo }) => {
    return (
        <div className={styles.container}>
            <Link href={`/promo/${promo._id}`} passHref>
                <Image src={promo.img} alt="" width="300" height="300" className={styles.image} />
            </Link>
            <h1 className={styles.title}>{promo.title}</h1>
            <p className={styles.desc}>{promo.desc}</p>
        </div>
    );
};

export default PromoCard;