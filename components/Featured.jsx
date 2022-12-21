import styles from "../styles/Featured.module.css";
import Image from "next/image";
import { useState } from "react";
import React from 'react';


const Featured = () => {
    const [index, setIndex] = useState(0)
    const images = [
        "/img/mainfeature.png",
        "/img/thiss.png",
        "/img/featured.png",
    ];

    const delay = 5000;

    const handleArrow = (direction) => {
        if(direction==="l"){
            setIndex(index !== 0 ? index-1 : 2)
        }

        if(direction==="r"){
            setIndex(index !== 2 ? index+1 : 0)
        }
    }

    React.useEffect(() => {
        setTimeout(
          () =>
            setIndex((prevIndex) =>
              prevIndex === images.length - 1 ? 0 : prevIndex + 1
            ),
          delay
        );
    
        return () => {};
    }, [index]);
    
    return (
        <div className={styles.container}>
            <div className={styles.arrowContainer} style={{left:0}} onClick={() =>handleArrow("l")}>
                {/* <Image src="/img/lefticon.png" alt="" objectFit="contain" layout="fill"/> */}
                {/* <Link id="prev" className={styles.prev} href="">&#8810;</Link> */}
            </div>
            <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
            {images.map((img, i) => (
                <div className={styles.imgContainer} key={i}>
                    <Image src={img}  alt="" layout="fill" objectFit="contain"/>
                </div>
            ))}
            </div>
            <div className={styles.arrowContainerB} style={{right:0}} onClick={() =>handleArrow("r")}>
                {/* <Image src={"/img/lefticon.png"} alt="" layout="fill" objectFit="contain"/> */}
                {/* <Link id="next" className={styles.next} href="">&#8811;</Link>  */}
            </div>
        </div>
    ); 
};

export default Featured;