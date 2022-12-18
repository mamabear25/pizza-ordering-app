import styles from "../styles/Add.module.css";

const EditPizzaButton = ({ setPizzaClose }) => {
  return (
    <div onClick={() => setPizzaClose(false)} className={styles.mainAddButton}>
      Edit
    </div>
  );
};

export default EditPizzaButton;