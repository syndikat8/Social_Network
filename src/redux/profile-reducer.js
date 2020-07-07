import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = "social-network/profile/ADD-POST";
const SET_USER_PROFILE = "social-network/profile/SET_USER_PROFILE";
const SET_STATUS = "social-network/profile/SET_STATUS";
const DETELE_POST = "social-network/profile/DETELE_POST";
const SAVE_PHOTO = "social-network/profile/SAVE_PHOTO";

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
      }
    case DETELE_POST:
      return {
        ...state,
        posts: state.posts.filter(p => p.id !== action.postId)
      }
    case SET_USER_PROFILE:
      return {...state, profile: action.profile}
    case SET_STATUS:
      return {...state, status: action.status}
    case SAVE_PHOTO:
      return {
        ...state,
        profile: {...state.profile, photos: action.photos}
      }
    default:
      return state;
  }
}


export const addPost = (newPostText) => ({type: ADD_POST, newPostText})
export const deletePost = (postId) => ({type: DETELE_POST, postId})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO, photos})

export const getUserProfile = (userId) => async (dispatch) => {

  const response = await usersAPI.getProfile(userId)
  dispatch(setUserProfile(response.data))
}
export const updateStatus = (newStatus) => async (dispatch) => {

  const response = await profileAPI.updateStatus(newStatus)
  if (response.data.resultCode === 0) {
    dispatch(setStatus(newStatus))
  }
}
export const savePhoto = (photoFile) => async (dispatch) => {

  const response = await profileAPI.savePhoto(photoFile)
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos))
  }
}
export const getStatus = (userId) => async (dispatch) => {

  const response = await profileAPI.getStatus(userId)
  dispatch(setStatus(response.data))
}

export default profileReducer;