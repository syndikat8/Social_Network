import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../common/FormsControls/FormsControls";
import {required} from "../../../utils/validators/validators";
import styles from "./../../common/FormsControls/FomrControls.module.css"

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          validate={[required]}
          placeholder="Email"
          name="email"
          component={Input}/>
      </div>
      <div>
        <Field
          type="password"
          validate={[required]}
          placeholder="Password"
          name="password"
          component={Input}/>
      </div>
      <div>
        <Field
          type="checkbox"
          name="rememberMe"
          component={Input}/> remember me
      </div>
      {props.error && <div className={styles.formSumatyError}>
        {props.error}
      </div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  )
}

const LoginReduxForm = reduxForm({
  // a unique name for the form
  form: 'login'
})(LoginForm)

export default LoginReduxForm;