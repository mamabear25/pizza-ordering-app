import styles from "../styles/Footer.module.css"
import Image from "next/image"

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <Image src="/img/footerr.png" objectFit="contain" layout="fill" alt=""/>
            </div>
            <div className={styles.item}>
                <div className={styles.card}>
                    <h2>
                        CONTACT US
                    </h2>
                    <p className={styles.text}>
                        <span className={styles.span}>CHAT US ON WHATSAPP</span>
                        <br /> +2348123456789
                    </p>
                    <p className={styles.text}>
                        CALL US
                        <br />+2349876543210
                        <br />+2348987654321
                        <br />+2376543210987
                    </p>
                    <p className={styles.text}>
                        EMAIL US
                        <br />techmomma@techmomma.com
                    </p>
                </div>
                <div className={styles.card}>
                    <h2>
                        FIND OUR HUT
                    </h2>
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
                    <h2 className={styles.title}>WORKING HOURS</h2>
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

export default Footer;