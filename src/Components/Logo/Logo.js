import { Link } from 'gatsby';
import React from 'react'
import styles from './Logo.module.css'

export const Logo = () => {
    return  <Link to="/"><h1 className={styles.Logo}>wonevil</h1>    </Link>
    
}


