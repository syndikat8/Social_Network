import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getStatus, updateStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {witchAuthRedirect} from "../hoc/witchAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

  componentDidMount() {
    debugger
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId
    }
    this.props.getUserProfile(userId)
    this.props.getStatus(userId)
  }

  render() {
    return (
      <Profile {...this.props}  />
    )
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    // isAuth: state.auth.isAuth
  }
}

export default compose(
  connect(mapStateToProps, {getUserProfile, updateStatus, getStatus}),
  withRouter,
  witchAuthRedirect
)(ProfileContainer)
