import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sitebarReducer from "./sitebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import loginReducer from "./login-reducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sitibarPage: sitebarReducer,
  usersPage: usersReducer,
  auth:authReducer,
  login:loginReducer,
  form: formReducer
});

let store = createStore(reducers,applyMiddleware(thunkMiddleware));

window.store = store

export default store

