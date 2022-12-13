import '../styles/globals.css';
import Layout from '../components/Layout';
import store from "../redux/store";
import { Provider } from "react-redux";
import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0/client';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <UserProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserProvider>
    </Provider>
  );
};

export default MyApp;
