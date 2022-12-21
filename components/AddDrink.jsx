import { useState } from "react";
import styles from "../styles/Add.module.css";
import axios from "axios";

const AddDrink = ({ setDrinkClose }) => {
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState(null);
    const [price, setPrice] = useState(null);

    const changePrice = (e, index) => {
        const currentPrice = price;
        // set prices here
        setPrice(currentPrice);
    };

    const handleCreate = async () => {
        const data = new FormData();
        // set our file
        data.append("file", file);
        data.append("upload_preset", "uploads")
        //upload to cloudinary
        try{
            const uploadRes = await axios.post(
                "https://api.cloudinary.com/v1_1/doype43ec/image/upload", 
            data
            );

            const { url } = uploadRes.data;
            const newProduct = {
                title,
                img: url,
                price
            };

            await axios.post("http://localhost:3000/api/drinks", newProduct);
            setDrinkClose(true);
        } catch (err) {
            console.log(err)
        }
    };

    return(
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <span onClick={() => setDrinkClose(true)} className={styles.close}>
                    X
                </span>
                <h1>Add a new Drink</h1>
                <div className={styles.item}>
                    <label className={styles.label}>Choose an Image</label>
                    {/* setting the file means we cannot choose multiple files, it can only be one per time */}
                    <input type="file" onChange={(e) => setFile(e.target.files[0])} />
                </div>
                <div className={styles.item}>
                    <label className={styles.label}>Title</label>
                    <input 
                    className={styles.input}
                    type="text"
                    onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className={styles.item}>
                    <label className={styles.label}>Price</label>
                    <div className={styles.priceContainer}>
                        <input 
                        className={`${styles.input} ${styles.inputSm}`}
                        type="number"
                        placeholder="500"
                        onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>
                </div>
                <button className={styles.addButton} onClick={handleCreate}>
                    Create
                </button>
            </div>
        </div>
    );
};

export default AddDrink;



