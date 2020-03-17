import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {



  let dialogsElements = props.state.dialogs.map( d => <DialogItem name={d.name} id={d.id} img={d.img}/>);
  let messagesElements  = props.state.messages.map( m => <Message message={m.message}/> );

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