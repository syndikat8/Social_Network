import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
  posts: [
    {id: 1, message: "Hi, how are you?", likesCount: "12"},
    {id: 2, message: "It's my first post?", likesCount: "11"},
    {id: 3, message: "Lololo", likesCount: "11"},
    {id: 4, message: "HEHEHE", likesCount: "11"}
  ],
  profile: null,
  status: ""
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: action.newPostText,
        likesCount: 0
      }
      return {
        ...state,
        posts: [...state.posts, newPost]
      };
    case SET_USER_PROFILE:
      return {...state, profile: action.profile}
    case SET_STATUS:
      return {...state, status: action.status}
    default:
      return state;
  }

}


export const addPost = (newPostText) => ({type: ADD_POST,newPostText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});

export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId)
      .then(response => {
        dispatch(setUserProfile(response.data))
      })
}

export const updateStatus = (newStatus) => (dispatch) => {
  debugger
  profileAPI.updateStatus(newStatus)
    .then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setStatus(newStatus))}

    })
}

export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId)
    .then(response => {
      dispatch(setStatus(response.data))
    })
}

export default profileReducer;