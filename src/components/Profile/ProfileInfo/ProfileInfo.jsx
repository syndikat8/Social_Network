import React from "react";
import styles from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloder";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader/>
  }
  return (
    <div className={styles.profileInfo}>
      <div className={styles.descriptionBlock}>
        <img src={props.profile.photos.large}/>
        <div className={styles.descriptionBlockItem}>
          <ProfileStatus status="sadasdasdasd"/>
          <div>
            <div>
              Обо мне:
            </div>
            {props.profile.aboutMe}
          </div>
          <div>
            <div>
              Имя:
            </div>
            {props.profile.fullName}
          </div>
          <div>
            <span>Контакты:</span>
            <div>
              Facebook: {props.profile.contacts.facebook}
            </div>
            <div>
              Vkontakte: {props.profile.contacts.vk}
            </div>
            <div>
              Twitter: {props.profile.contacts.twitter}
            </div>
            <div>
              Instagram: {props.profile.contacts.instagram}
            </div>
            <div>
              Youtube: {props.profile.contacts.youtube}
            </div>
            <div>
              Website: {props.profile.contacts.website}
            </div>
          </div>
          <div>
            <div>
              Работа:
            </div>
            {props.profile.lookingForAJobDescription}
          </div>
        </div>
      </div>
    </div>
  )
};


export default ProfileInfo;