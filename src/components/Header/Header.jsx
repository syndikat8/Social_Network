import React from "react";
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <img
        src="https://image.shutterstock.com/image-vector/shield-letter-s-logosafesecureprotection-logomodern-260nw-633031571.jpg"
        alt=""/>
    </header>
  )
};

export default Header;