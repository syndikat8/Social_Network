import React from "react";
import {Field, reduxForm} from "redux-form";

const MessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} >
      <div>
        <Field placeholder={"Enter your message"} name={"newMessage"} component={"textarea"}/>
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  )
}

const MessageFormRedux = reduxForm({
  // a unique name for the form
  form: 'dialogAddMessageForm'
})(MessageForm)

export default MessageFormRedux;