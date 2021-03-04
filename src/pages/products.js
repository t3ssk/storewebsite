import React from "react";
import Layout from "../Components/Layout/Layout";
import { useStaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";
import styles from './products.module.css';


const getData = graphql`
  {
    allContentfulProduct {
      nodes {
        available
        description {
          raw
        }
        id
        image {
          gatsbyImageData(placeholder: TRACED_SVG, backgroundColor: "#3D5467")
          fluid {
            tracedSVG
            aspectRatio
            base64
            sizes
            src
            srcSet
            srcWebp
            srcSetWebp
          }
        }
        price
        rating
        slug
        title
      }
    }
  }
`;

const Products = () => {
  const data = useStaticQuery(getData);

  const productsOverview = data.allContentfulProduct.nodes.map(item =>{
    return (
      <article
        key={item.id}
        className={`${styles.Product} ${!item.available && styles.soldOut}`}
      >
        <div className={styles.Product__image}>
          <Img fluid={item.image.fluid} alt={item.title} />
        </div>
        <div className={styles.Product__info}>
          <h3>{item.title}</h3>
          <p className={styles.price}>${item.price}</p>        
         </div>
          <p>
            <Link to={`/products/${item.slug}`}>More details</Link>
          </p>

      </article>
    );}
  );

  return <Layout>
  <section className={styles.All_Products}>{productsOverview}</section></Layout>;
};
 
export default Products;
