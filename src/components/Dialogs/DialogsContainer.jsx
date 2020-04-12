import React from "react";
import {addMessageActionCreator, updateNewPostMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = () => {

  return (
    <StoreContext.Consumer>
      {(store) => {
        let state = store.getState().dialogsPage;

        let addMessag = () => {
          store.dispatch(addMessageActionCreator());
        };

        let onMessagChange = (text) => {
          store.dispatch(updateNewPostMessageActionCreator(text));
        };

        return <Dialogs addMessag={addMessag}
                        onMessagChange={onMessagChange}
                        dialogsPage={state}/>
      }
      }
    </StoreContext.Consumer>
  )
};

export default DialogsContainer;