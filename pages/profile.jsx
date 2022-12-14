import React from 'react';
import styles from "../styles/Profile.module.css";
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import Loading from '../components/Loading';
import Image from "next/image";
import Link from 'next/link';

function Profile() {
  const { user, isLoading } = useUser();
  return (
    <>
    {isLoading && <Loading />}
    {user && (
      <>
      <div className={styles.container}>
          <div className={styles.seccont}>
            <div>
              <Image
                src={user.picture}
                width="50" height="50"
                alt=""
                className={styles.image}
                // className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
                decode="async"
                data-testid="profile-picture"
              />
            </div>
            <div>
            </div>
            <div>
              <div className={styles.info}>
                <p className={styles.name} data-testid="profile-name">Welcome to your profile {user.nickname}</p>
                <p className={styles.details}>Here are your details:</p>
                <p className={styles.email}><b>Username: </b>{user.nickname}</p>
                <p className={styles.email}><b>Email: </b>{user.email}</p>
                {/* <p>Would you like a cheesy Burger today?</p> */}
                {user["http://techmomma-fastfood.com/roles"].includes("Admin")&& (
                  <>
                  <p className={styles.details}>You are the designated Admin.</p>
                  <Link href="/admin" passHref>
                      <div className={styles.title}>
                        <li className={styles.listItem}>Admin Dashboard</li>
                      </div>
                  </Link>
                  </>
                )}
              </div>
            </div>
          </div>
          {/* <Row>
            <div>{JSON.stringify(user, null, 2)}</div>
          </Row> */}
      </div>
      </>
    )}
  </>
  );
}

export default withPageAuthRequired(Profile, {
  onRedirecting: () => <Loading />
});
