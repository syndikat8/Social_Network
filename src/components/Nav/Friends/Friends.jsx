import React from "react";
import styles from './Friends.module.css';
import Friend from "./Friend/Friend";

const Friends = (props) => {

  let friend = props.friends.map(f => <Friend key={f.id} name={f.name} img={f.img}/>);

  return (

    <div className={styles.friends}>
      <div>Friends</div>
      <div className={styles.friend}>
        {friend}
      </div>
    </div>
  )
};

export default Friends;
