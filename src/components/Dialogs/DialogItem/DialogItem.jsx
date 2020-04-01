import React from "react";
import styles from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
  let path ="/dialogs/" + props.id;

  return (
    <div className={styles.dialog + " " + styles.active}>

      <NavLink to={path}>  {props.name} </NavLink>
      <div><img src={props.img} alt=""/></div>

    </div>
  )
};



export default DialogItem;