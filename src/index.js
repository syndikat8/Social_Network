import store from "./redux/state";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";




let rerenderEntierTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state}
           addPost={store.addPost.bind(store)}
           addMessag={store.addMessag.bind(store)}
           updateNewPostText={store.updateNewPostText.bind(store)}
           updateNewPostMessag={store.updateNewPostMessag.bind(store)}></App>
    </BrowserRouter>
    , document.getElementById('root'));
};

rerenderEntierTree(store.getState());

store.subscribe(rerenderEntierTree);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
