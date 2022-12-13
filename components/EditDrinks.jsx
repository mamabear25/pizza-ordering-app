import { useState } from "react";
import styles from "../styles/EditProduct.module.css";
import axios from "axios";

const EditDrinks = ({ setClose }) => {
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState(null);
    const [price, setPrice] = useState([])

    const changePrice = (e, index) => {
        const currentPrice = price;
        // set prices here
        setPrice(currentPrice);
    };

    const handleUpdate = async () => {
        const data = new FormData();
        // set our file
        data.append("file", file);
        data.append("upload_preset", "uploads")
        //upload to cloudinary
        try{
            const uploadRes = await axios.put(
                `https://api.cloudinary.com/v1_1/doype43ec/image/upload/${id}`, 
            data
            );

            const { url } = uploadRes.data;
            const updatedProduct = {
                title,
                desc,
                img: url,
                prices,
                extraOptions,
            };

            await axios.put(`http://localhost:3000/api/drinks/${id}`, updatedProduct);
            setClose(true);
        } catch (err) {
            console.log(err)
        }
    };

    return(
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <span onClick={() => setClose(true)} className={styles.close}>
                    X
                </span>
                <h1>Update Drink</h1>
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
                    <input 
                    className={`${styles.input} ${styles.inputSm}`}
                    type="number"
                    placeholder="500"
                    onChange={(e) => changePrice(e)} 
                    />
                </div>
                <button className={styles.addButton} onClick={handleUpdate}>
                    Update
                </button>
            </div>
        </div>
    );
};

export default EditDrinks;