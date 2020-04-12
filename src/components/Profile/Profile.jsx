import React from "react";
import styles from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = () => {




  return (
    <div className={styles.profile}>
      <ProfileInfo/>
      <MyPostsContainer/>
    </div>
  )
};

export default Profile;