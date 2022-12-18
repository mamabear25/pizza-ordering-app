import styles from "../styles/Add.module.css";

const EditPromoButton = ({ setPromoClose }) => {
  return (
    <div onClick={() => setPromoClose(false)} className={styles.mainAddButton}>
      Edit
    </div>
  );
};

export default EditPromoButton;