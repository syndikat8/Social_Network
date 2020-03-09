import React from "react";
import styles from '../MyPosts/MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      <textarea></textarea>
      <button>Add post</button>
      <button>Remove</button>
      <div> New posts</div>
      <div className={styles.posts}>
        <Post message="Hi, how are you?" likesCount="0"/>
        <Post message="It's my first post?" likesCount="23"/>
      </div>
    </div>
  )
};


export default MyPosts;