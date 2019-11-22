import React from 'react';
import styles from './Navbar.module.css';
import { NavLink } from "react-router-dom";

const Navbar = (props) => {

  return (
    <nav className={styles.nav}>
      <div className={styles.item}>
        <NavLink to='/services' activeClassName={styles.active}>Services</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink exact to='/gallery' activeClassName={styles.active}>Gallery</NavLink>
      </div>
      <div className={`${styles.item} ${styles.active}`}>
        <NavLink to='/articles' activeClassName={styles.active}>Articles</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to='/about' activeClassName={styles.active}>About</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to='/contacts' activeClassName={styles.active}>Contacts</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;