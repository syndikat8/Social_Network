import {usersAPI} from "../api/api";

const FOLLOW = "social-network/users/FOLLOW";
const UNFOLLOW = "social-network/users/UNFOLLOW";
const SET_USERS = "social-network/users/SET_USERS";
const SET_CURRET_PAGE = "social-network/users/SET_CURRET_PAGE";
const SET_TOTAL_USERS_COUNT = "social-network/users/SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "social-network/users/TOGGLE_IS_FETCHING"
const TOGGLE_IS_FOLLOWING_PROGRESS = "social-network/users/TOGGLE_IS_FOLLOWING_PROGRESS"

let initialState = {
  users: [],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [2]
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: true}
          }
          return u;
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: false}
          }
          return u;
        })
      }
    case SET_USERS: {
      return {...state, users: action.users}
    }
    case SET_CURRET_PAGE: {
      return {...state, currentPage: action.currentPage}
    }
    case SET_TOTAL_USERS_COUNT: {
      return {...state, totalUsersCount: action.count}
    }
    case TOGGLE_IS_FETCHING: {
      return {...state, isFetching: action.isFetching}
    }
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter(id => id !== action.userId)
      }
    }
    default:
      return state;
  }

}


export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRET_PAGE, currentPage});
export const setTotalUsersCount = (TotalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: TotalUsersCount});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (isFetching, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId
});

export const requestUsers = (page, pageSize) => {
  return (dispatch) => {
    dispatch(setCurrentPage(page))
    dispatch(toggleIsFetching(true))
    usersAPI.getUsers(page, pageSize).then(data => {
      dispatch(toggleIsFetching(false))
      dispatch(setUsers(data.items))
      dispatch(setTotalUsersCount(data.totalCount))
    })
  }
}

export const follow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true,userId))
    usersAPI.follow(userId)
      .then(data => {
        if (data.resultCode === 0) {
          dispatch(followSuccess(userId))
        }
        dispatch(toggleFollowingProgress(false,userId))
      })
  }
}

export const unfollow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true,userId))
    usersAPI.unfollow(userId)
      .then(data => {
        if (data.resultCode === 0) {
          dispatch(unfollowSuccess(userId))
        }
        dispatch(toggleFollowingProgress(false,userId))
      })
  }
}
export default usersReducer;