import { useState } from "react";
import styles from "../styles/EditProduct.module.css";
import axios from "axios";

const EditPromo = ({ setPromoClose }) => {
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState(null);

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
                img: url,
            };

            await axios.put(`https://pizza-ordering-8f1q08h0h-mamabear25.vercel.app/api/drinks/${id}`, updatedProduct);
            setPromoClose(true);
        } catch (err) {
            console.log(err)
        }
    };

    return(
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <span onClick={() => setPromoClose(true)} className={styles.close}>
                    X
                </span>
                <h1>Update Promo</h1>
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
                <button className={styles.addButton} onClick={handleUpdate}>
                    Update
                </button>
            </div>
        </div>
    );
};

export default EditPromo;