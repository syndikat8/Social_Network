import React from "react";
import styles from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloder";
import userPhoto from "./../../../assets/images/user.jpg"
import {ProfileData} from "./ProfileData/ProfileData";
import {ProfileDataFormRedux} from "./ProfileDataForm/ProfileDataForm";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const ProfileInfo = ({profile, status, updateStatus, isOvner, savePhoto, saveProfile, setEditMode, editMode}) => {

  const mainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0])
    }
  }

  if (!profile) {
    return <Preloader/>
  }

  const onSubmit = (formData) => {
    saveProfile(formData)
  }

  return (
    <div className={styles.profileInfo}>
      <div className={styles.avatar}>
        <img className={styles.mainPhoto} src={profile.photos.large || userPhoto}/>
        <div>
          {isOvner && <input onChange={mainPhotoSelected} type="file"/>}
        </div>
      </div>
      <div className={styles.profileInfoBlock}>
        <ProfileStatus status={status} updateStatus={updateStatus}/>
        {editMode
          ? <ProfileDataFormRedux initialValues={profile} profile={profile} onSubmit={onSubmit}/>
          : <ProfileData profile={profile} isOvner={isOvner} activateEditMode={() => setEditMode(true)}/>}
      </div>
    </div>
  )
};


export default ProfileInfo;
