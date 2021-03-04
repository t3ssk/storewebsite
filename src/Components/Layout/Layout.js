import React from 'react'
import {Helmet} from 'react-helmet';
import { useStaticQuery, graphql } from "gatsby";
import logo from '../../obrázky/Datový zdroj 1.png';
import Navbar from '../Navbar/Navbar';
import  './Layout.module.css'

const getData = graphql`
  {
    site {
      info:siteMetadata {
        title
        description
        author
      }
    }
  }
`;

const Layout = ({children}) => {
     const data = useStaticQuery(getData);
    return (
      <main>
        <Helmet>
          <title>{data.site.info.title}</title>
          <meta name="title" content={data.site.info.title} />
          <meta
            name="description"
            content={data.site.info.description}
          />
          <meta name="author" content={data.site.info.author} />
          <link rel="icon" type="image/png" href={logo} />
        </Helmet>
        <Navbar />
        {children}
      </main>
    );
}

export default Layout
