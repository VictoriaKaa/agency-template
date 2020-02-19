import React, { useRef, useContext } from 'react';
import Fade from 'react-reveal/Fade';
import useOnClickOutside from "../../../utils/hooks/onClickOutside.js";
import { MenuContext } from '../NavState/NavState';
import HamburgerButton from '../HamburgerButton/HamburgerButton.jsx';
import styles from './MainMenu.module.css';


const SideMenu = ({ children }) => {
  const { isMenuOpen } = useContext(MenuContext);

  return <Fade right>
    <div className={!isMenuOpen ? styles.hiddenSidebar : styles.activeSidebar}>
      {children}
    </div>
  </Fade>
};

SideMenu.defaultProps = {
  children: (
    <div className={styles.sidebar}>
      <div>Not navigation</div>
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