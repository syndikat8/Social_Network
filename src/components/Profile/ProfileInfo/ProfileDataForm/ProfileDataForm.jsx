import React from "react";
import {createField, Input, Textare} from "../../../common/FormsControls/FormsControls";
import {reduxForm} from "redux-form";
import styles from "./../../../common/FormsControls/FomrControls.module.css"
const ProfileDataForm = ({profile, handleSubmit, error}) => {

  return (
    <form onSubmit={handleSubmit} >
      <button>Сохранить</button>
      {error && <div className={styles.formSumatyError}>
        {error}
      </div>}
      <div>
        <b>Имя:</b>
      </div>
      {createField("Имя", "fullName", [], Input)}
      <div>
        <b>Обо мне:</b>
      </div>
      {createField("Обо мне", "aboutMe", [], Textare)}
      <div>
        <span><b>Контакты:</b></span>
        {Object.keys(profile.contacts).map(key => {
          return <div key={key}>
            {key}: {createField(key, "contacts." + key, [], Input)}
          </div>
        })}
      </div>
      <div>
        <b>В поиске работы:</b>
      </div>
      {createField("", "lookingForAJob", [], Input, {type: "checkbox"})}
      <div>
        <b>Префессиональные навыки:</b>
      </div>
      {createField("Префессиональные навыки", "lookingForAJobDescription", [], Textare)}
    </form>
  )
}
export const ProfileDataFormRedux = reduxForm({
  // a unique name for the form
  form: 'profile'
})(ProfileDataForm)

