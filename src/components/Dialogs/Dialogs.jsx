import React from "react";
import styles from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const Dialogs = () => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogs__items}>
        <div className={styles.dialog + " " + styles.active}>
          <NavLink to="/dialogs/1">Dima</NavLink>
        </div>
        <div className={styles.dialog}>
          <NavLink to="/dialogs/2">Masha</NavLink>
        </div>
        <div className={styles.dialog}>
          <NavLink to="/dialogs/3">Sveta</NavLink>
        </div>
        <div className={styles.dialog}>
          <NavLink to="/dialogs/4">Sasha</NavLink>
        </div>
        <div className={styles.dialog}>
          <NavLink to="/dialogs/5">Victor</NavLink>
        </div>
        <div className={styles.dialog}>
          <NavLink to="/dialogs/6">Valera</NavLink>
        </div>
      </div >
      <div className={styles.messages}>
      <div className={styles.dialog}>Hi</div>
      <div className={styles.dialog}>Hi is you</div>
      <div className={styles.dialog}>You</div>
      </div>
    </div>
  )
};

export default Dialogs;