import React from "react";
import {Field, reduxForm} from "redux-form";

const PostsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} >
      <div>
        <Field placeholder={"Enter your message"} name={"newPostText"} component={"textarea"}/>
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}

const PostsFormRedux = reduxForm({
  // a unique name for the form
  form: 'profileAddPostsForm'
})(PostsForm)

export default PostsFormRedux;