import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
  {id: "1", message: "Hi, how are you?", likesCount: "12"},
  {id: "2", message: "It's my first post?", likesCount: "11"},
  {id: "3", message: "Lololo", likesCount: "11"},
  {id: "4", message: "HEHEHE", likesCount: "11"}

];

let dialogs = [
  {name: "Dima", id:"1"},
  {name: "Masha", id:"2"},
  {name: "Sveta", id:"3"},
  {name: "Sasha", id:"4"},
  {name: "Victor", id:"5"},
  {name: "Valera", id:"6"}
];

let messages = [
  {message:"Hi", id:"1"},
  {message: "Hi is you", id:"2"},
  {message: "You", id:"3"},
  {message: "You", id:"4"},
  {message: "You", id:"5"}
];



ReactDOM.render(<App posts={posts}  messages={messages}  dialogs={dialogs} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
