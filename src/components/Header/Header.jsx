import React from "react";
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <img
        src="https://xage.ru/media/uploads/2009/9/kak-poyavilis-logotipyi-samyih-izvestnyih-rok-grupp/kak-poyavilis-logotipyi-samyih-izvestnyih-rok-grupp_2.jpg"/>
      <div className={styles.loginBlock}>
        { props.isAuth
          ? <div>{props.login} - <button onClick={props.logout} >Log out</button></div>
          : <NavLink to="/login">Login</NavLink> }
      </div>
    </header>
  )
};

export default Header;