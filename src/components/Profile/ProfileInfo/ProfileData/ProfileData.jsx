import React from "react";
import ProfileContacts from "./ProfileContacts/ProfileContacts";
import styles from "./ProfileData.module.css";

export const ProfileData = ({profile, isOvner, activateEditMode}) => {

  return (
    <div className={styles.profileData}>
      {isOvner && <button onClick={activateEditMode}>РЕД</button>}
      <div>
        <b>Имя:</b>
      </div>
      {profile.fullName}
      <div>
        <b>Обо мне:</b>
      </div>
      {profile.aboutMe}
      <div>
        <span><b>Контакты:</b></span>
        {Object.keys(profile.contacts).map(key => {
          return <ProfileContacts key={key} contactsTitle={key} contactsValue={profile.contacts[key]}/>
        })}
      </div>
      <div>
        <b>В поиске работы:</b>
      </div>
      {profile.lookingForAJob? "Нет": "Да"}
      <div>
        <b>Префессиональные навыки:</b>
      </div>
      {profile.lookingForAJobDescription}
    </div>
  )
}
