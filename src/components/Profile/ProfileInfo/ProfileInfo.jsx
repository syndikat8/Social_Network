import React from "react";
import styles from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div className={styles.profileInfo}>
      <div>
        <img src="https://klike.net/uploads/posts/2019-01/1547367999_1.jpg" alt=""/>
      </div>
      <div className={styles.descriptionBlock}>
        ava +descrp
      </div>
    </div>
  )
};


export default ProfileInfo;