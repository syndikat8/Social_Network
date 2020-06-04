import React from "react";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {witchAuthRedirect} from "../hoc/witchAuthRedirect";
import {compose} from "redux";
import {addMessage} from "../../redux/dialogs-reducer";

let mapStateToProps = (state) => {

  return {
    dialogsPage: state.dialogsPage,
  }
}

export default compose(
  connect(mapStateToProps,{addMessage}),
  witchAuthRedirect
)(Dialogs)