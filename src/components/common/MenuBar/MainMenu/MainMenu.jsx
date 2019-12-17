import React, { useRef, useContext } from 'react';
import styles from './MainMenu.module.css';
import { NavLink } from "react-router-dom";
import useOnClickOutside from "../../../utils/hooks/onClickOutside.js";
import { MenuContext } from '../NavState/NavState';
import HamburgerButton from '../HamburgerButton/HamburgerButton.jsx';


const SideMenu = ({ children }) => {
  const { isMenuOpen } = useContext(MenuContext);

  return <div className={!isMenuOpen ? styles.hiddenSidebar : styles.activeSidebar}>
    {children}
  </div>
};

SideMenu.defaultProps = {
  children: (
    <div className={styles.sidebar}>
      <a href="#">Home</a>
    </div>
  ),
};

const MainMenu = ({ children }) => {
  const node = useRef();
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);
  useOnClickOutside(node, () => {
    if (isMenuOpen) {
      toggleMenuMode();
    }
  });
  
  return (
    <nav className={styles.nav} ref={node} >
      <HamburgerButton />
      <SideMenu children={children} />
      <div className={styles.menuItems} >
        {children}
      </div>
    </nav>
  );
};

export default MainMenu;