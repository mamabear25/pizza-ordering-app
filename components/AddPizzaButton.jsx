import styles from "../styles/Add.module.css";
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0/client';


const AddPizzaButton = ({ setPizzaClose }) => {
  const { user } = useUser();
  return (
    <div>
      {user["http://techmomma-fastfood.com/roles"].includes("Admin") && (
        <div onClick={() => setPizzaClose(false)} className={styles.addProduct}>
          Add New Pizza
        </div>
      )}
    </div>
  );
};

export default withPageAuthRequired(AddPizzaButton, {
  onError: error => <ErrorMessage>{error.message}</ErrorMessage>
});