import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import MessageFormRedux from "./DialogsForm/DialogsForm";


const Dialogs = (props) => {

  let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} img={d.img}/>);
  let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} key={m.id} />);

  let addNewMessage = (value) => {
    props.addMessage(value.newMessage)
  }

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogs__items}>
        {dialogsElements}
      </div>
      <div className={styles.messages}>
        {messagesElements}
      </div>
      <div className={styles.areabutton}>
        <MessageFormRedux onSubmit={addNewMessage}/>
      </div>


    </div>
  )
};



export default Dialogs;