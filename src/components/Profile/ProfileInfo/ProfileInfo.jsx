import React from "react";
import styles from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloder";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = ({profile, status, updateStatus}) => {
  if (!profile) {
    return <Preloader/>
  }
  return (
    <div className={styles.profileInfo}>
      <div className={styles.descriptionBlock}>
        <img src={profile.photos.large}/>
        <div className={styles.descriptionBlockItem}>
          <ProfileStatus status={status} updateStatus={updateStatus}/>
          <div>
            <div>
              Обо мне:
            </div>
            {profile.aboutMe}
          </div>
          <div>
            <div>
              Имя:
            </div>
            {profile.fullName}
          </div>
          <div>
            <span>Контакты:</span>
            <div>
              Facebook: {profile.contacts.facebook}
            </div>
            <div>
              Vkontakte: {profile.contacts.vk}
            </div>
            <div>
              Twitter: {profile.contacts.twitter}
            </div>
            <div>
              Instagram: {profile.contacts.instagram}
            </div>
            <div>
              Youtube: {profile.contacts.youtube}
            </div>
            <div>
              Website: {profile.contacts.website}
            </div>
          </div>
          <div>
            <div>
              Работа:
            </div>
            {profile.lookingForAJobDescription}
          </div>
        </div>
      </div>
    </div>
  )
};


export default ProfileInfo;