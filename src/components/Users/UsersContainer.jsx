import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
  follow, requestUsers,
  setCurrentPage,
  toggleFollowingProgress,
  unfollow
}
  from "../../redux/users-reducer";
import Preloader from "../common/Preloader/Preloder";
import {compose} from "redux";
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getTotalUsersCount,
  getUsers
} from "../../redux/users-selectors";



class UsersContainer extends React.Component {

  componentDidMount() {
    const {currentPage, pageSize } = this.props
    this.props.requestUsers(currentPage, pageSize)
  }

  onPageChanged = (pageNumber) => {
    const {pageSize} = this.props
    this.props.requestUsers(pageNumber, pageSize)
  }

  render() {
    return <>
      {this.props.isFetching ? <Preloader/> : null}
      <Users {...this.props} onPageChanged={this.onPageChanged}  />
    </>
  };
}


let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
  }
}

export default compose(
  connect(mapStateToProps,{toggleFollowingProgress, follow, unfollow, setCurrentPage, requestUsers})
)(UsersContainer)
