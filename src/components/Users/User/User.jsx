import React from "react";
import styles from './User.module.css';
import userPhoto from "../../../assets/images/user.jpg"
import {NavLink} from "react-router-dom";

const User = ({user, followingInProgress, unfollow, follow}) => {

  return (
    <div className={styles.user}>
          <div className={styles.avaButton}>
            <div>
              <NavLink to={"/profile/" + user.id}>
                <img
                  src={user.photos.small != null ? user.photos.small : userPhoto}
                  className={styles.userPhoto}/>
              </NavLink>
            </div>
            <div>
              {user.followed
                ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                  unfollow(user.id)
                }}>UNFOLLOW</button>
                : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                  follow(user.id)
                }}>FOLLOW</button>}
            </div>
          </div>
          <div className={styles.message}>
            <div>
              <div>{user.name}</div>
              <div>{user.status}</div>
            </div>
            <div>
              <div>{"u.location.country"}</div>
              <div>{"u.location.city"}</div>
            </div>
          </div>
    </div>
  )
};


export default User;