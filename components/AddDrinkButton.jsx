import styles from "../styles/Add.module.css";

const AddDrinkButton = ({ setClose }) => {
  return (
    <div onClick={() => setClose(false)} className={styles.addProduct}>
      Add New Drink
    </div>
  );
};

export default AddDrinkButton;