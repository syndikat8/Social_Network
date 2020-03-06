import React from "react";
import styles from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div className={styles.profile}>
      <div>
        <img src="https://klike.net/uploads/posts/2019-01/1547367999_1.jpg" alt=""/>
      </div>
      <div>ava +descrp</div>
      <MyPosts/>
    </div>
  )
};

export default Profile;