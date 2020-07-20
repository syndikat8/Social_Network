import React from "react";
import {connect} from "react-redux";
import Friends from "../Friends";

let mapStateToProps = (state) => {
  return {
    friends: state.sitibarPage.friends
  }
}

const FriendsContainer = connect(mapStateToProps,null)(Friends);

export default FriendsContainer;
