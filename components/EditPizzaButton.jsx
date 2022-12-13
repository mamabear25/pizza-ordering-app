import styles from "../styles/Add.module.css";

const EditPizzaButton = ({ setClose }) => {
  return (
    <div onClick={() => setClose(false)} className={styles.mainAddButton}>
      Edit
    </div>
  );
};

export default EditPizzaButton;