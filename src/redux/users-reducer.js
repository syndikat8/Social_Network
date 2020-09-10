import {usersAPI} from "../api/api";
import {updateOnjectInArray} from "../utils/object-helpers";

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
  followingInProgress: [2],
  drivers: [
    {
      driverId: 'abate',
      url: 'http://en.wikipedia.org/wiki/Carlo_Mario_Abate',
      givenName: 'Carlo',
      familyName: 'Abate',
      dateOfBirth: '1932-07-10',
      nationality: 'Italian',
    },
  ],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateOnjectInArray(state.users, action.userId, "id", {followed: true})
      }
    case UNFOLLOW:
      return {
        ...state,
        users: updateOnjectInArray(state.users, action.userId, "id", {followed: false})
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

export const requestUsers = (page, pageSize) => async (dispatch) => {
  dispatch(setCurrentPage(page))
  dispatch(toggleIsFetching(true))

  const data = await usersAPI.getUsers(page, pageSize)
  dispatch(toggleIsFetching(false))
  dispatch(setUsers(data.items))
  dispatch(setTotalUsersCount(data.totalCount))
}

const followInfollowFlow = async (dispatch, userId, apiMethod, actionCrator) => {
  dispatch(toggleFollowingProgress(true, userId))

  const data = await apiMethod(userId)
  if (data.resultCode === 0) {
    dispatch(actionCrator(userId))
  }
  dispatch(toggleFollowingProgress(false, userId))
}

export const follow = (userId) => async (dispatch) => {
  followInfollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess)
}

export const unfollow = (userId) => async (dispatch) => {
  followInfollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess)
}

export default usersReducer;
