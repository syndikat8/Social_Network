import React from "react";
import LoginReduxForm from "./LoginForm/LoginForm";
import {connect} from "react-redux";
import {setLogin} from "../../redux/login-reducer";

const Login = (props) => {

  const onSubmit = (formData) => {
    debugger
    props.setLogin(formData.login,formData.password,formData.rememberMe)
  }

  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  )

}




export default connect(null,{setLogin})(Login);