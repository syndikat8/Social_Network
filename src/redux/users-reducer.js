const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [
    // {id: 1, photoUrl: "https://v1.popcornnews.ru/k2/news/970/upload/news/637056676986.jpg", followed: false, fullName: "Dima", status: "I'm a boss", location: {city: "Minsk", country: "Belarus"} },
    // {id: 2, photoUrl: "https://v1.popcornnews.ru/k2/news/970/upload/news/637056676986.jpg",  followed: true,  fullName: "Vasya", status: "Doter", location: {city: "Ukraine", country: "Kiev"} },
    // {id: 3, photoUrl: "https://v1.popcornnews.ru/k2/news/970/upload/news/637056676986.jpg",  followed: false,  fullName: "Bob", status: "Cs go", location: {city: "Moscow", country: "Russia"} },
  ]
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map( u => {
          if (u.id === action.userId) {
            return {...u, followed: true}
          }
          return u;
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map( u => {
          if (u.id === action.userId) {
            return {...u, followed: false}
          }
          return u;
        })
      }
    case SET_USERS: {
      return {...state, users: [...state.users, ...action.users]}
    }
    default:
      return state;
  }

}


export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});

export default usersReducer;