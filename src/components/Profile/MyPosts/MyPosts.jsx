import React from "react";
import styles from '../MyPosts/MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElement = props.posts.map(p => (<Post message={p.message} likesCount={p.likesCount}/>));

  let newPostElement = React.createRef();

  let addPost = () => {
    debugger;
    let text = newPostElement.current.value;
    props.addPost(text)
    newPostElement.current.value = ""
  };

  return (
    <div className={styles.postsBlock}>
      <h3>My posts</h3>
      <div>
        <textarea ref={newPostElement}></textarea>
      </div>
      <div>
        <button onClick={addPost}>Add post</button>
      </div>
      <div className={styles.posts}>

        {postsElement}

      </div>
    </div>
  )
};


export default MyPosts;