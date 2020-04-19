const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_POST_MESSAGE = "UPDATE-NEW-POST-MESSAGE";

let initialState = {
  dialogs: [
    {
      name: "Dima",
      id: 1,
      img: "https://st2.depositphotos.com/2972641/6125/i/450/depositphotos_61253969-stock-photo-strong-athletic-man-on-black.jpg"
    },
    {name: "Sveta", id: 2, img: "https://sdelaicomp.ru/wp-content/uploads/2019/06/Photo-Steam11.jpg"},
    {
      name: "Sasha",
      id: 3,
      img: "https://avatars.mds.yandex.net/get-pdb/1926958/e4dcc096-608c-44ae-a173-c097f2eb9124/s375"
    },
    {
      name: "Victor",
      id: 4,
      img: "https://avatars.mds.yandex.net/get-pdb/1376702/7cc131a1-d0e9-4f1d-a7e0-196f6909802d/s1200"
    },
    {
      name: "Valera",
      id: 5,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM8ASs1BYlICxtKF_rEuETJ3SaJVGtRqTwZR2Fp73F9WuCdla6JQ&s"
    }
  ],
  messages: [
    {message: "Hi", id: 1},
    {message: "Hi is you", id: 2},
    {message: "You", id: 3},
    {message: "You", id: 4},
    {message: "You", id: 5}
  ],
  newPostMessag: "qqqqq"
};


const dialogsReducer = (state = initialState, action) => {


  switch (action.type) {
    case ADD_MESSAGE:
      let message = state.newPostMessag
      return  {
        ...state,
        newPostMessag: "",
        messages: [...state.messages, { id: 6, message:message}]
      }
    case UPDATE_NEW_POST_MESSAGE:
      return{
        ...state,
        newPostMessag: action.newText
      }
    default:
      return state;
  }
}


export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateNewPostMessageActionCreator = (text) => ({
  type: UPDATE_NEW_POST_MESSAGE, newText: text
});

export default dialogsReducer;