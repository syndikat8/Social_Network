import state, {subscribe} from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import {addPost, updateNewPostText, addMessag,updateNewPostMessag} from "./redux/state";



let rerenderEntierTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} addPost={addPost} addMessag={addMessag} updateNewPostText={updateNewPostText} updateNewPostMessag={updateNewPostMessag}></App>
    </BrowserRouter>
    , document.getElementById('root'));
};

rerenderEntierTree(state);

subscribe(rerenderEntierTree);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
