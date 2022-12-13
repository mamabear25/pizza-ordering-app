import { useState } from "react";
import styles from "../styles/EditProduct.module.css";
import axios from "axios";

const EditBurger = ({ setClose }) => {
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState(null);
    const [desc, setDesc] = useState(null)
    const [prices, setPrices] = useState([])
    const [ extraOptions, setExtraOptions] = useState([]);
    const [extra, setExtra] = useState(null)

    const changePrice = (e, index) => {
        const currentPrices = prices;
        //update current prices
        currentPrices[index] = e.target.value;
        // set prices here
        setPrices(currentPrices);
    };

    const handleExtraInput = (e) => {
        setExtra({...extra, [e.target.name]: e.target.value});
    };

    const handleExtra = (e) => {
        // setting state using previous data
        setExtraOptions((prev) => [...prev, extra]);
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

            await axios.put(`http://localhost:3000/api/burger/${id}`, updatedProduct);
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
                <h1>Update Burger</h1>
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
                    <label 
                    className={styles.label}>Description</label>
                    <textarea
                    rows={4}
                    type="text"
                    onChange={(e) => setDesc(e.target.value)} />
                </div>
                <div className={styles.item}>
                    <label className={styles.label}>Prices</label>
                    <div className={styles.priceContainer}>
                        <input 
                        className={`${styles.input} ${styles.inputSm}`}
                        type="number"
                        placeholder="Small"
                        onChange={(e) => changePrice(e, 0)} 
                        />
                        <input 
                        className={`${styles.input} ${styles.inputSm}`}
                        type="number"
                        placeholder="Medium"
                        onChange={(e) => changePrice(e, 1)} 
                        />
                        <input 
                        className={`${styles.input} ${styles.inputSm}`}
                        type="number"
                        placeholder="Large"
                        onChange={(e) => changePrice(e, 2)} 
                        />
                    </div>
                </div>
                <div className={styles.item}>
                    <label className={styles.label}>Toppings</label>
                    <div className={styles.extra}>
                        <input
                        className={`${styles.input} ${styles.inputSm}`}
                        type="text"
                        placeholder="item"
                        name="text"
                        onChange={handleExtraInput}
                        />
                        <input
                        className={`${styles.input} ${styles.inputSm}`}
                        type="number"
                        placeholder="price"
                        name="price"
                        onChange={handleExtraInput}
                        />
                        <button className={styles.extraButton} onClick={handleExtra}>
                            Add
                        </button>
                    </div>
                    <div className={styles.extraItems}>
                        {extraOptions.map((options) =>(
                            <span key={options.text} className={styles.extraItem}>
                                {options.text}
                            </span>
                        ))}
                    </div>
                    </div>
                <button className={styles.addButton} onClick={handleUpdate}>
                    Update
                </button>
            </div>
        </div>
    );
};

export default EditBurger;



