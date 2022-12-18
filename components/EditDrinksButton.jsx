import styles from "../styles/Add.module.css";

const EditDrinksButton = ({ setDrinkClose }) => {
  return (
    <div onClick={() => setDrinkClose(false)} className={styles.mainAddButton}>
      Edit
    </div>
  );
};

export default EditDrinksButton;