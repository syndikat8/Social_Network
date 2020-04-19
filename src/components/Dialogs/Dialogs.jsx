import React from "react";
import styles from "./Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

  let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} img={d.img}/>);
  let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} key={m.id} />);


  let onAddMessag = () => {
    props.addMessag();
  };

  let onMessagChange = (e) => {
    let text = e.target.value;
    props.updateNewPostMessage(text);
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
          <button onClick={onAddMessag}>send</button>
        </div>
      </div>


    </div>
  )
};

export default Dialogs;