import React from "react";
import {Field, reduxForm} from "redux-form";
import {Textare} from "../../common/FormsControls/FormsControls";
import {maxLengthCreater, required} from "../../../utils/validators/validators";

const maxLength50 = maxLengthCreater(50)

const MessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} >
      <div>
        <Field
          validate={[required, maxLength50]}
          placeholder="Enter your message"
          name="newMessage"
          component={Textare}/>
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