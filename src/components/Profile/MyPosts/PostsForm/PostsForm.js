import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreater, required} from "../../../../utils/validators/validators";
import {Textare} from "../../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreater(10)

const PostsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          validate={[required, maxLength10]}
          placeholder="Enter your message"
          name="newPostText"
          component={Textare}/>
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