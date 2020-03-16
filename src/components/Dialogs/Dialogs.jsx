import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = () => {

  let dialogs = [
    {name: "Dima", id:"1"},
    {name: "Masha", id:"2"},
    {name: "Sveta", id:"3"},
    {name: "Sasha", id:"4"},
    {name: "Victor", id:"5"},
    {name: "Valera", id:"6"}
  ];

  let messages = [
    {message:"Hi", id:"1"},
    {message: "Hi is you", id:"2"},
    {message: "You", id:"3"},
    {message: "You", id:"4"},
    {message: "You", id:"5"}
  ];

  let dialogsElements = dialogs.map( d => <DialogItem name={d.name}   id={d.id}/>);
  let messagesElements  = messages.map( m => <Message message={m.message}/> );

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogs__items}>

        {dialogsElements}

      </div>

      <div className={styles.messages}>
        {messagesElements}

      </div>
    </div>
  )
};

export default Dialogs;