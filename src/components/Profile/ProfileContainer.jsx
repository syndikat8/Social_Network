import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";
import {witchAuthRedirect} from "../hoc/witchAuthRedirect";

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2
    }
    this.props.getUserProfile(userId)
  }

  render() {
    return (
      <Profile {...this.props}  />
    )
  }
}

let RedirectComponent = witchAuthRedirect(ProfileContainer)

let mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
  }
}

let WitchUrlDataContainerComponent = withRouter(RedirectComponent)

export default connect(mapStateToProps, {getUserProfile})(WitchUrlDataContainerComponent);