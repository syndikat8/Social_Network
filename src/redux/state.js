import React from "react";

let state = {
  profilePage: {
    posts: [
      {id: 1, message: "Hi, how are you?", likesCount: "12"},
      {id: 2, message: "It's my first post?", likesCount: "11"},
      {id: 3, message: "Lololo", likesCount: "11"},
      {id: 4, message: "HEHEHE", likesCount: "11"}
    ]
  },
  dialogsPage: {
    dialogs: [
      {name: "Dima", id: 1, img:<img src="https://st2.depositphotos.com/2972641/6125/i/450/depositphotos_61253969-stock-photo-strong-athletic-man-on-black.jpg"/> },
      {name: "Sveta", id: 2, img:<img src="https://sdelaicomp.ru/wp-content/uploads/2019/06/Photo-Steam11.jpg"/> },
      {name: "Sasha", id: 3, img:<img src="https://avatars.mds.yandex.net/get-pdb/1926958/e4dcc096-608c-44ae-a173-c097f2eb9124/s375"/> },
      {name: "Victor", id: 4, img:<img src="https://avatars.mds.yandex.net/get-pdb/1376702/7cc131a1-d0e9-4f1d-a7e0-196f6909802d/s1200"/> },
      {name: "Valera", id: 5, img:<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM8ASs1BYlICxtKF_rEuETJ3SaJVGtRqTwZR2Fp73F9WuCdla6JQ&s"/> }
    ],
    messages: [
      {message: "Hi", id: 1},
      {message: "Hi is you", id: 2},
      {message: "You", id: 3},
      {message: "You", id: 4},
      {message: "You", id: 5}
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


export let addPost = (postMessage) => {
  debugger
  let newPost = {
    id: 5,
    message: postMessage,
    likesCount: 0
  };
  state.profilePage.posts.push(newPost)
}

export default state;