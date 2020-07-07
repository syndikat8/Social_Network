import React from "react";
import styles from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloder";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import userPhoto from "./../../../assets/images/user.jpg"

const ProfileInfo = ({profile, status, updateStatus, isOvner, savePhoto}) => {

  if (!profile) {
    return <Preloader/>
  }

  const mainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0])
    }
  }

  return (
    <div className={styles.profileInfo}>
      <div className={styles.descriptionBlock}>
        <div className={styles.avatar}>
          <img className={styles.mainPhoto} src={profile.photos.large || userPhoto}/>
          {isOvner && <input onChange={mainPhotoSelected} type="file"/>}
        </div>

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