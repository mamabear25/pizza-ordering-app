import styles from "../styles/Add.module.css";

const AddBurgerButton = ({ setClose }) => {
  return (
    <div onClick={() => setClose(false)} className={styles.addProduct}>
      Add New Burger
    </div>
  );
};

export default AddBurgerButton;