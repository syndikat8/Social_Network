import React from "react";
import styles from '../MyPosts/MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {

  let messageData = [
    {id:"1", message: "Hi, how are you?", likesCount:"12"},
    {id:"2", message: "It's my first post?", likesCount:"11" }

  ];

  return (
    <div className={styles.postsBlock}>
      <h3>My posts</h3>
      <div>
        <textarea></textarea>
      </div>
      <div>
        <button>Add post</button>
      </div>
      <div className={styles.posts}>
        <Post message={messageData[0].message} likesCount={messageData[0].likesCount}/>
        <Post message={messageData[1].message} likesCount={messageData[1].likesCount}/>
      </div>
    </div>
  )
};


export default MyPosts;