import React from "react";
import styles from '../Post/Post.module.css';

const Post = (props) => {

  return (
    <div className={styles.item}><img
      src="https://i1.wp.com/sova.ponominalu.ru/wp-content/uploads/2019/08/ava-max.jpg?fit=2000%2C1333&ssl=1"
      alt=""/>
    { props.message }
      <div>
        <span>Like</span> {props.likesCount}
      </div>
    </div>
  )
};


export default Post;