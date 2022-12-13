import styles from "../styles/Add.module.css";

const AddPizzaButton = ({ setClose }) => {
  return (
    <div onClick={() => setClose(false)} className={styles.addProduct}>
      Add New Pizza
    </div>
  );
};

export default AddPizzaButton;