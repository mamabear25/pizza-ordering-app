import styles from "../styles/Footer.module.css"
import Image from "next/image"

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <Image src="/img/contact.png" objectFit="contain" layout="fill" alt="" />
            </div>
            <div className={styles.item}>
                <div className={styles.card}>
                    <h2 className={styles.bye}>
                        Well baked slice of Pizza, Next.js app made with love 
                    </h2>
                </div>
                <div className={styles.card}>
                    <h1>
                        FIND OUR HUT
                    </h1>
                    <p className={styles.text}>
                        1234 R. Silver Road #304.
                        <br /> Lekki, Lagos state
                        <br /> (080) 123 568 74
                    </p>
                    <p className={styles.text}>
                        1234 R. Gold Road #304.
                        <br /> Uyo, Akwa, Ibom
                        <br /> (080) 123 568 74
                    </p>
                    <p className={styles.text}>
                        1234 R. Bronze Road #304.
                        <br /> Portharcourt, Rivers
                        <br /> (080) 123 568 74
                    </p>
                    <p className={styles.text}>
                        1234 R. Copper Road #304.
                        <br /> Maitama, Abuja
                        <br /> (080) 123 568 74
                    </p>
                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>WORKING HOURS</h1>
                    <p className={styles.text}>
                        MONDAY - FRIDAY
                        <br /> 9:00am - 11:00pm
                    </p>
                    <p className={styles.text}>
                        SATURDAY - SUNDAY
                        <br /> 12:pm - 6:00pm
                    </p>
                </div>
            </div>
        </div>
    )
};

export default Footer