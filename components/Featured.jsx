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

    // const handleArrow = (direction) => {
    //     if(direction==="l"){
    //         setIndex(index !== 0 ? index-1 : 2)
    //     }

    //     if(direction==="r"){
    //         setIndex(index !== 2 ? index+1 : 0)
    //     }
    // }

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
            <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
            {images.map((img, i) => (
                <div className={styles.imgContainer} key={i}>
                    <Image src={img}  alt="" layout="fill" objectFit="contain" className={styles.img}/>
                </div>
            ))}
            </div>
        </div>
    ); 
};

export default Featured;