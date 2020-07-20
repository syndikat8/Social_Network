import React from "react";
import styles from "../ProfileData.module.css";

const ProfileContacts = ({contactsTitle, contactsValue}) => {

  return <div className={styles.contacts}>
    {contactsTitle}: {contactsValue}
  </div>

}

export default ProfileContacts;
