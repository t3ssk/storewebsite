const path = require('path');

exports.createPages = async ({graphql, actions}) => {
    const {createPage} = actions;
    const result = await graphql(`
      query getProducts {
        products: allContentfulProduct {
          nodes {
            available
            description {
              raw
            }
            id
            image {
              gatsbyImageData(
                placeholder: TRACED_SVG
                backgroundColor: "#686963"
              )
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
    `);
      result.data.products.nodes.forEach((product)=>{
          createPage({
              path: `/products/${product.slug}`,
              component: path.resolve('src/Templates/productTemplate.js'),
              context: {
                  slug: product.slug,
                  title: product.title, 
                  description: product.description,
                  image: product.image,
                  price: product.price,
                  rating: product.rating,
                  available: product.available
              }
          })
      })
}