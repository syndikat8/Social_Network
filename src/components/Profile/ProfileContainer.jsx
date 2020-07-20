import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {
  getUserProfile,
  getStatus,
  updateStatus,
  savePhoto,
  saveProfile,
  setEditMode
} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {witchAuthRedirect} from "../hoc/witchAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

  refreshProfile() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId
      if (!userId) {
        this.props.history.push("/login")
      }
    }
    this.props.getUserProfile(userId)
    this.props.getStatus(userId)
  }

  componentDidMount() {
    this.refreshProfile()
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile()
    }
  }

  render() {
    return (
      <Profile {...this.props} isOvner={!this.props.match.params.userId}/>
    )
  }
}

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    editMode: state.profilePage.editMode
  }
}

export default compose(
  connect(mapStateToProps, {getUserProfile, updateStatus, getStatus, savePhoto, saveProfile, setEditMode}),
  withRouter,
  witchAuthRedirect
)(ProfileContainer)
