import React from "react";
import styles from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem =(props) => {
  let path ="/dialogs/" + props.id;

  return (
    <div className={styles.dialog + " " + styles.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
};

const Message =(props) => {
  return (
    <div className={styles.message}>{props.message}</div>
  )
};

const Dialogs = () => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogs__items}>
       <DialogItem name="Dima" id="1"/>
       <DialogItem name="Masha" id="2"/>
       <DialogItem name="Sveta" id="3"/>
       <DialogItem name="Sasha" id="4"/>
       <DialogItem name="Victor" id="5"/>
       <DialogItem name="Valera" id="6"/>
      </div>

      <div className={styles.messages}>
      <Message message="Hi"/>
      <Message message="Hi is you"/>
      <Message message="You"/>
      <Message message="You"/>
      <Message message="You"/>
      </div>
    </div>
  )
};

export default Dialogs;