import React from "react";
import styles from '../MyPosts/MyPosts.module.css';
import Post from "./Post/Post";
import PostsFormRedux from "./PostsForm/PostsForm";

const MyPosts = React.memo((props) => {
    let postsElement = props.posts.map(p => (<Post key={p.id} message={p.message} likesCount={p.likesCount}/>));

    let addNewPost = (value) => {
      props.addPost(value.newPostText)
    }
    return (
      <div className={styles.postsBlock}>
        <h3>My posts</h3>
        <PostsFormRedux onSubmit={addNewPost}/>
        <div className={styles.posts}>
          {postsElement}
        </div>
      </div>
    )
  }
)

export default MyPosts;
