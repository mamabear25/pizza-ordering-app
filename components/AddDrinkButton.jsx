import styles from "../styles/Add.module.css";
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0/client';


const AddDrinkButton = ({ setDrinkClose }) => {
  const { user } = useUser();
  return (
    <div>
      {user["http://techmomma-fastfood.com/roles"].includes("Admin") && (
        <div onClick={() => setDrinkClose(false)} className={styles.addProduct}>
          Add New Drink
        </div>
      )}
    </div>
  );
};

export default withPageAuthRequired(AddDrinkButton);