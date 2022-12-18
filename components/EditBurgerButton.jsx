import styles from "../styles/Add.module.css";

const EditBurgerButton = ({ setBurgerClose }) => {
  return (
    <div onClick={() => setBurgerClose(false)} className={styles.mainAddButton}>
      Edit
    </div>
  );
};

export default EditBurgerButton;