import React from "react";
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <img
        src="https://image.shutterstock.com/image-vector/shield-letter-s-logosafesecureprotection-logomodern-260nw-633031571.jpg"/>
      <div className={styles.loginBlock}>
        { props.isAuth? props.login:<NavLink to="/login">Login</NavLink> }
      </div>
    </header>
  )
};

export default Header;