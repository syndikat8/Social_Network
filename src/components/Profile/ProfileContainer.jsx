import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getStatus, updateStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {witchAuthRedirect} from "../hoc/witchAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
     // 7309
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
    userId: state.auth.userId,
    authorizedUserId: state.auth.isAuth
  }
}

export default compose(
  connect(mapStateToProps, {getUserProfile, updateStatus, getStatus}),
  withRouter,
  witchAuthRedirect
)(ProfileContainer)
