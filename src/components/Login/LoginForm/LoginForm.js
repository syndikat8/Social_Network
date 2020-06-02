import React from "react";
import {Field, reduxForm} from "redux-form";

const LoginForm = (props) => {
  return (
    <form>
      <div>
        <Field placeholder={"Login"} name={"login"} component={"input"}/>
      </div>
      <div>
        <Field placeholder={"Password"} name={"password"} component={"input"}/>
      </div>
      <div>
        <Field type="checkbox" name={"rememberMe"} component={"input"}/> remember me
      </div>
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