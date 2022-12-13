import styles from "../../styles/Admin.module.css";
import Image from "next/image";
import { useUser } from '@auth0/nextjs-auth0/client';
import Link from "next/link"

const Index = () => {
    const { user, isLoading } = useUser(); 
    return (
            <div className={styles.container}>
                {user && (
                <div>
                    <div>
                        Hi there {user.given_name}, you are the designated Admin, and here are actions you can perform:
                        <div>
                            <ul>
                                <li>
                                    Posting Pizzas
                                </li>
                                <li>
                                    Deleting Pizzas
                                </li>
                                <li>
                                    Updating a Pizza
                                </li>
                                <li>
                                    Viewing all Pizza List
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>
                                    Posting Burgers
                                </li>
                                <li>
                                    Deleting Burgers
                                </li>
                                <li>
                                    Updating a Burger
                                </li>
                                <li>
                                    Viewing all Burger list
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li>
                                    Posting Drinks
                                </li>
                                <li>
                                    Deleting Drinks
                                </li>
                                <li>
                                    Updating a Drink
                                </li>
                                <li>
                                    Viewing all Drinks list
                                </li>
                            </ul>
                            <Link href="/products" passHref>
                                <h1 className={styles.title}>Products</h1>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>And Over here, is a page to track all orders TechMomma Pizza has!</p>
                            <p>Orders are tracked in four progressive ways</p>
                            <ul>
                                <li>
                                Payment
                                    <ul>
                                        <li>Cash on Delivery <span>and</span></li>
                                        <li>PayPal</li>
                                    </ul>
                                </li>
                                <li>Preparing</li>
                                <li>Any minute Now</li>
                                <li>Delivered</li>
                            </ul>
                            <p>To move from one level to the other, click on "next stage"</p>
                            <Link href="/orders" passHref>
                                <h1 className={styles.title}>Orders</h1>
                            </Link>
                        </div>
                    </div>
                </div> 
                )}        
            </div>
    );  

};


export default Index;