import React from 'react'
import {Link} from 'gatsby'
import styles from './Navbar.module.css'
import { Logo } from '../Logo/Logo';

const Navbar = () => {
    return (
      <nav className={styles.Navbar}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Logo />
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
    );
}

export default Navbar 
