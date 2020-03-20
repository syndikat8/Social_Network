import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import {addPost} from "./redux/state";



export let rerenderEntierTree = (state) => {
ReactDOM.render(
  <BrowserRouter>
    <App state={state} addPost={addPost} ></App>
  </BrowserRouter>
  , document.getElementById('root'));

}


