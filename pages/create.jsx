import styles from "../styles/Admin.module.css";
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import { useState} from "react";
import AddPizzaButton from "../components/AddPizzaButton";
import AddPizza from "../components/AddPizza";
import AddBurgerButton from "../components/AddBurgerButton";
import AddBurger from "../components/AddBurger";
import AddDrinkButton from "../components/AddDrinkButton";
import AddDrink from "../components/AddDrink";

const CreateProducts = () => {
    const { user } = useUser();
    const [close, setPizzaClose] = useState(true);
    const [closeBurger, setBurgerClose] = useState(true);
    const [closeDrink, setDrinkClose] = useState(true);

    return (
        <div className={styles.item}>
            {user["http://techmomma-fastfood.com/roles"].includes("Admin") &&(
            <>
            <h1 className={styles.title}>Create New Products Here</h1>
            <div>
                {<AddPizzaButton setPizzaClose={setPizzaClose} />}
                {!close && <AddPizza setPizzaClose={setPizzaClose} />}
            </div>
            <div>
                {<AddBurgerButton setBurgerClose={setBurgerClose} />}
                {!closeBurger && <AddBurger setBurgerClose={setBurgerClose} />}
            </div>
            <div>
                {<AddDrinkButton setDrinkClose={setDrinkClose} />}
                {!closeDrink && <AddDrink setDrinkClose={setDrinkClose} />}
            </div>
            </>
            )}
        </div>
    );
};

export default withPageAuthRequired(CreateProducts);