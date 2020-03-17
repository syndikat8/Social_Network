import React from "react";

let state = {
  profilePage: {
    posts: [
      {id: "1", message: "Hi, how are you?", likesCount: "12"},
      {id: "2", message: "It's my first post?", likesCount: "11"},
      {id: "3", message: "Lololo", likesCount: "11"},
      {id: "4", message: "HEHEHE", likesCount: "11"}
    ]
  },
  dialogsPage: {
    dialogs: [
      {name: "Dima", id: "1"},
      {name: "Masha", id: "2"},
      {name: "Sveta", id: "3"},
      {name: "Sasha", id: "4"},
      {name: "Victor", id: "5"},
      {name: "Valera", id: "6"}
    ],
    messages: [
      {message: "Hi", id: "1"},
      {message: "Hi is you", id: "2"},
      {message: "You", id: "3"},
      {message: "You", id: "4"},
      {message: "You", id: "5"}
    ]
  },
  sitibarPage: {
    friends: [
      {name: "Sasha", img:<img src="https://klike.net/uploads/posts/2019-03/1551511801_1.jpg"/>},
      {name: "Alex", img:<img src="https://schtirlitz.ru/wp-content/uploads/chto-oznachaet-avatarka_20.jpg"/>},
      {name: "Masha", img:<img src="https://whatsism.com/uploads/posts/2018-07/1530545833_il2zmvzx9py.jpg"/>}
    ]
  }
};

export default state;