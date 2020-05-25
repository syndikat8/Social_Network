import React from "react";
import {addMessageActionCreator, updateNewPostMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {witchAuthRedirect} from "../hoc/witchAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {

  return {
    dialogsPage: state.dialogsPage,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addMessag: () => {
      dispatch(addMessageActionCreator());
    },
    updateNewPostMessage: (text) => {
      dispatch(updateNewPostMessageActionCreator(text));
    }
  }
}


export default compose(
  connect(mapStateToProps,mapDispatchToProps),
  witchAuthRedirect
)(Dialogs)