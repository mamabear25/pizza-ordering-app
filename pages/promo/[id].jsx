import styles from "../../styles/Product.module.css";
import Image from "next/image";
import axios from "axios"

const Promo = ({ promo }) => {

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.imgContainer}>
                    <Image src={promo.img} alt="" objectFit="contain" layout="fill" />
                </div>
            </div>
            <div className={styles.right}>
                <h1 className={styles.title}>{promo.title}</h1>
                <p className={styles.desc}>{promo.desc}</p>
            </div>
        </div>
    );
};

export const getServerSideProps = async ({ params }) => {
    const res = await axios.get(`https://pizza-ordering-8f1q08h0h-mamabear25.vercel.app/api/promos/${params.id}`);
    return{
      props:{
        promo: res.data,
      },
    };
};

export default Promo;