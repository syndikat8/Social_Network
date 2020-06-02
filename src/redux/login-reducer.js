import {authAPI} from "../api/api";

const LOGIN = "LOGIN"

let initialState = {
  email: "null",
  password: "null",
  rememberMe: false,
  captcha: false
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case  LOGIN:
      return {
        ...state,
        ...action.data,
      }
    default:
      return state;
  }
}

export const setMeLogin = (login,password,rememberMe) => ({type:LOGIN, data:{login,password,rememberMe}})

export const setLogin = (login,password,rememberMe) => (dispatch) => {
    authAPI.login(login,password,rememberMe)
      .then(response => {
        debugger
          dispatch(setMeLogin(login,password,rememberMe))

      })
}

export default loginReducer;