import React from 'react';
import { Row, Col } from 'reactstrap';
import styles from "../styles/Profile.module.css";
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import Loading from '../components/Loading';
import Image from "next/image";

function Profile() {
  const { user, isLoading } = useUser();

  return (
    <>
    {isLoading && <Loading />}
    {user && (
      <>
      <div className={styles.container}>
          <Row className="align-items-center profile-header mb-5 text-center text-md-left" data-testid="profile">
            <Col md={2}>
              <Image
                src={user.picture}
                width="50" height="50"
                alt=""
                className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
                decode="async"
                data-testid="profile-picture"
              />
            </Col>
            <div>
            </div>
            <div>
              <Col md>
                <h2 data-testid="profile-name">Welcome to your profile {user.given_name}</h2>
                <p>Here are your details:</p>
                {/* <p>Would you like a cheesy Burger today?</p> */}
              </Col>
            </div>
          </Row>
          <Row>
            <div>{JSON.stringify(user, null, 2)}</div>
          </Row>
      </div>
      </>
    )}
  </>
  );
}

export default withPageAuthRequired(Profile, {
  onRedirecting: () => <Loading />,
  onError: error => <ErrorMessage>{error.message}</ErrorMessage>
});
