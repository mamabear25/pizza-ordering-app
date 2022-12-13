import styles from "../styles/Add.module.css";

const AddPromoButton = ({ setClose }) => {
  return (
    <div onClick={() => setClose(false)} className={styles.addProduct}>
      Add New Promo
    </div>
  );
};

export default AddPromoButton;