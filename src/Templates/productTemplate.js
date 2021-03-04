import React from 'react';
import Img from 'gatsby-image';
import Layout from '../Components/Layout/Layout';
import styles from './productTemplate.module.css';


const productTemplate = ({pageContext}) => {

    const rating = '⭐️'
    const description = JSON.parse(pageContext.description.raw)
    return (
      <Layout>
        <article className={styles.Product}>
        <h2>{pageContext.title}</h2>
          <div className={styles.Product__info}>
            <div className={styles.Product__item}>
              <Img fluid={pageContext.image.fluid} alt={pageContext.title} />
            </div>
            <div className={styles.Product__item}>
              
              <p>$ {pageContext.price}</p>
              <p>Customer rating: {rating.repeat(pageContext.rating)}</p>
              <p>{description.content[0].content[0].value}</p>
              <button disabled={!pageContext.available}>Buy now</button>
            </div>
          </div>
        </article>
      </Layout>
    );
}

export default productTemplate
