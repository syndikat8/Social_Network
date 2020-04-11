import React from "react";
import styles from '../MyPosts/MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postsElement = props.posts.map(p => (<Post message={p.message} likesCount={p.likesCount}/>));

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={styles.postsBlock}>
      <h3>My posts</h3>
      <div>
        <textarea ref={newPostElement}
                  onChange={onPostChange}
                  value={props.newPostText}/>
      </div>
      <div>
        <button onClick={onAddPost}>Add post</button>
      </div>
      <div className={styles.posts}>

        {postsElement}

      </div>
    </div>
  )
};


export default MyPosts;