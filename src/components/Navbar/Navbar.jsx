import React, { useRef, useContext } from 'react';
import styles from './Navbar.module.css';
import { NavLink } from "react-router-dom";
import useOnClickOutside from '../utils/hooks/onClickOutside';
import { MenuContext } from '../common/MenuBar/NavState/NavState';
import NavState from '../common/MenuBar/NavState/NavState';
import MainMenu from '../common/MenuBar/MainMenu/MainMenu';


const Navbar = (props) => {
  const node = useRef();
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);

  const menu = (
    <><div className={styles.item}>
      <NavLink to='/services' activeClassName={styles.active}>Services</NavLink>
    </div>
      <div className={styles.item}>
        <NavLink exact to='/gallery' activeClassName={styles.active}>Gallery</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to='/articles' activeClassName={styles.active}>Articles</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to='/about' activeClassName={styles.active}>About</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to='/contacts' activeClassName={styles.active}>Contacts</NavLink>
      </div>
    </>
  )

  useOnClickOutside(node, () => {
    if (isMenuOpen) {
      toggleMenuMode();
    }
  });
  return (
    <NavState>
      <MainMenu children={menu} />
    </NavState>
  );
}

export default Navbar;