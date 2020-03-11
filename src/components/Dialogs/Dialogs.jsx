import React from "react";
import styles from './Dialogs.module.css';


const Dialogs = () => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogs__items}>
        <div className={styles.dialog + " " + styles.active}>
          Dima
        </div>
        <div className={styles.dialog}>
          Masha
        </div>
        <div className={styles.dialog}>
          Sveta
        </div>
        <div className={styles.dialog}>
          Sasha
        </div>
        <div className={styles.dialog}>
          Victor
        </div>
        <div className={styles.dialog}>
          Valera
        </div>
      </div >
      <div className={styles.messages}>
      <div className={styles.message}>Hi</div>
      <div className={styles.message}>Hi is you</div>
      <div className={styles.message}>You</div>
      </div>
    </div>
  )
};

export default Dialogs;