import React from "react";
import styles from '../MyPosts/MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {



  let postsElement = props.posts.map(p => (<Post message={p.message} likesCount={p.likesCount}/>));

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