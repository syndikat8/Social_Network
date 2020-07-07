import React from "react";
import styles from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

  return (
    <div className={styles.profile}>
      <ProfileInfo isOvner={props.isOvner}
                   savePhoto={props.savePhoto}
                   profile={props.profile}
                   status={props.status}
                   updateStatus={props.updateStatus}/>
      <MyPostsContainer/>
    </div>
  )
};

export default Profile;