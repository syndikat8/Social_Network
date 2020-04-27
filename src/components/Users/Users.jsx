import React from "react";
import styles from './Users.module.css';
import  * as axios from "axios";
import userPhoto from "../../assets/images/images.png"


const Users = (props) => {


  if (props.users.length === 0) {

    axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
      debugger
      props.setUsers(response.data.items)
    })

    // props.setUsers([
    //     {
    //       id: 1,
    //       photoUrl: "https://v1.popcornnews.ru/k2/news/970/upload/news/637056676986.jpg",
    //       followed: false,
    //       fullName: "Dima",
    //       status: "I'm a boss",
    //       location: {city: "Minsk", country: "Belarus"}
    //     },
    //     {
    //       id: 2,
    //       photoUrl: "https://v1.popcornnews.ru/k2/news/970/upload/news/637056676986.jpg",
    //       followed: true,
    //       fullName: "Vasya",
    //       status: "Doter",
    //       location: {city: "Ukraine", country: "Kiev"}
    //     },
    //     {
    //       id: 3,
    //       photoUrl: "https://v1.popcornnews.ru/k2/news/970/upload/news/637056676986.jpg",
    //       followed: false,
    //       fullName: "Bob",
    //       status: "Cs go",
    //       location: {city: "Moscow", country: "Russia"}
    //     }
    //   ])
  }
  return (
    <div>
      {
        props.users.map(u => <div key={u.id}>
          <div className={styles.users}>
            <div className={styles.avaButton}>
              <div>
                <img
                  src={u.photos.small != null? u.photos.small: userPhoto}
                  className={styles.userPhoto}/>
              </div>
              <div>
                {u.followed
                  ? <button onClick={() => {props.unfollow(u.id)}}>UNFOLLOW</button>
                  : <button onClick={() => {props.follow(u.id)}}>FOLLOW</button>}

              </div>
            </div>
            <div className={styles.message}>
              <div>
                <div>{u.name}</div>
                <div>{u.status}</div>
              </div>
              <div>
                <div>{"u.location.country"}</div>
                <div>{"u.location.city"}</div>
              </div>

            </div>
          </div>
        </div>)
      }

    </div>
  )
};

export default Users;