import { useState } from "react";
import styles from "../styles/Add.module.css";
import axios from "axios";

const AddPromo = ({ setClose }) => {
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState(null);

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
                desc,
                img: url,
                prices,
                extraOptions,
            };

            await axios.post("http://localhost:3000/api/promos", newProduct);
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
                <h1>Add new Promo</h1>
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
                <button className={styles.addButton} onClick={handleCreate}>
                    Create
                </button>
            </div>
        </div>
    );
};

export default AddPromo;



