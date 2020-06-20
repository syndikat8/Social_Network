import React, {useState} from "react";


const ProfileStatus = (props) => {

  let [editMode, setEditMode] = useState(true)
  let [status, setStatus] = useState(props.status)

  const activateEditMode = () => {
    setEditMode(false)
  }
  const deactivateEditMode = () => {
    setEditMode(true)
    props.updateStatus(status)
  }

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
  }

  return (
    <div>
      {editMode
        ? <span
          onDoubleClick={activateEditMode}
        >{props.status || "Нет статуса"}</span>
        : <input
          value={status}
          onChange={onStatusChange}
          autoFocus={true}
          onBlur={deactivateEditMode}
          type="text"/>
      }
    </div>
  )

}

export default ProfileStatus;