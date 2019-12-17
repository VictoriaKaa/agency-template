import React, { useContext } from 'react';
import { MenuContext } from '../NavState/NavState';
import styles from './HamburgerButton.module.css';

const HamburgerButton = () => {
  const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);

  const clickHandler = () => {
    toggleMenuMode();
  };

  return (
    <div
      className={isMenuOpen ? styles.activeMenu : styles.navMenu}
      aria-label="Open main menu"
      onClick={clickHandler}>
      <div className={isMenuOpen ? styles.activeLine : styles.navLine}></div>
      <div className={isMenuOpen ? styles.activeLine : styles.navLine}></div>
      <div className={isMenuOpen ? styles.activeLine : styles.navLine}></div>
    </div>
  );
}

export default HamburgerButton;