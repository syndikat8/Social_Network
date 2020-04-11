import React from "react";
import {addMessageActionCreator, updateNewPostMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
  let state = props.store.getState().dialogsPage;

  let addMessag = () => {
    props.store.dispatch(addMessageActionCreator());
  };

  let onMessagChange = (text) => {
    props.store.dispatch(updateNewPostMessageActionCreator(text));
  };


  return (
    <Dialogs addMessag={addMessag}
             onMessagChange={onMessagChange}
             dialogsPage={state}/>
)
};

export default DialogsContainer;