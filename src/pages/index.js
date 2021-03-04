import React from 'react'
import Layout from "../Components/Layout/Layout";
import styles from './index.module.css';

const home = () => {
    return (
      <Layout>
        <div className={styles.Hero}>
          <div className={styles.Circle} />
          <div className={styles.Circle_pink} />
          <h2>Premium furniture</h2>
          <h3>made with care</h3>
        </div>
      </Layout>
    );
}

export default home