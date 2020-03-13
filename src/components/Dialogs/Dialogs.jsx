import React from "react";
import styles from "./Dialogs.module.css";
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

const Dialogs = (props) => {

  let dialogsData = [
    {name: "Dima", id:"1"},
    {name: "Masha", id:"2"},
    {name: "Sveta", id:"3"},
    {name: "Sasha", id:"4"},
    {name: "Victor", id:"5"},
    {name: "Valera", id:"6"}
  ];

  let messageData = [
    {name:"Hi", id:"1"},
    {name: "Hi is you", id:"2"},
    {name: "You", id:"3"},
    {name: "You", id:"4"},
    {name: "You", id:"5"},

  ];


  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogs__items}>
       <DialogItem name={dialogsData[0].name}   id={dialogsData[0].id}/>
       <DialogItem name={dialogsData[1].name}   id={dialogsData[1].id}/>
       <DialogItem name={dialogsData[2].name}   id={dialogsData[2].id}/>
       <DialogItem name={dialogsData[3].name}   id={dialogsData[3].id}/>
       <DialogItem name={dialogsData[4].name}   id={dialogsData[4].id}/>
       <DialogItem name={dialogsData[5].name}   id={dialogsData[5].id}/>
      </div>

      <div className={styles.messages}>
      <Message message={messageData[0].name}   id={messageData[0].id}/>
      <Message message={messageData[1].name}   id={messageData[1].id}/>
      <Message message={messageData[2].name}   id={messageData[2].id}/>
      <Message message={messageData[3].name}   id={messageData[3].id}/>
      <Message message={messageData[4].name}   id={messageData[4].id}/>
      </div>
    </div>
  )
};

export default Dialogs;