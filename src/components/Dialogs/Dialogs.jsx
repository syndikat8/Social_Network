import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewPostMessageActionCreator} from "../../redux/dialogs-reducer";




const Dialogs = (props) => {

  let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id} img={d.img}/>);
  let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message}/>);


  let addMessag = () => {
    props.dispatch(addMessageActionCreator());
  };

    let onMessagChange = (e) => {
    let text = e.target.value;
      props.dispatch(updateNewPostMessageActionCreator(text));
  };


  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogs__items}>
        {dialogsElements}
      </div>
      <div className={styles.messages}>
        {messagesElements}
      </div>
      <div className={styles.areabutton}>
        <div>
          <textarea value={props.dialogsPage.newPostMessag}
                    onChange={onMessagChange}/>
        </div>
        <div>
          <button onClick={addMessag}>send</button>
        </div>
      </div>


    </div>
  )
};

export default Dialogs;