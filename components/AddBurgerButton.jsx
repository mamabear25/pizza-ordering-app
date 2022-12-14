import styles from "../styles/Add.module.css";
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0/client';

const AddBurgerButton = ({ setBurgerClose }) => {
  const { user } = useUser();
  return (
    <div>
      {user["http://techmomma-fastfood.com/roles"].includes("Admin") && (
      <div onClick={() => setBurgerClose(false)} className={styles.addProduct}>
        Add New Burger
      </div>
      )}
    </div>
  );
};

export default withPageAuthRequired(AddBurgerButton);