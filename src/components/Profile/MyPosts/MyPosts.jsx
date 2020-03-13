import React from "react";
import styles from '../MyPosts/MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {

  let posts = [
    {id: "1", message: "Hi, how are you?", likesCount: "12"},
    {id: "2", message: "It's my first post?", likesCount: "11"},
    {id: "3", message: "Lololo", likesCount: "11"},
    {id: "4", message: "HEHEHE", likesCount: "11"}

  ];

  let postsElement = posts.map(p => (<Post message={p.message} likesCount={p.likesCount}/>))

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

        {postsElement}

      </div>
    </div>
  )
};


export default MyPosts;