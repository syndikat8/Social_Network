import React from "react";
import LoginReduxForm from "./LoginForm/LoginForm";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";

const Login = ({login, isAuth,captchaUrl}) => {

  const onSubmit = (formData) => {
    login(formData.email, formData.password, formData.rememberMe, formData.captcha)
  }

  if (isAuth) {
    return <Redirect to="/profile"/>
  }

  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
    </div>
  )
}

const mapStateToProps = (state) => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth
} )

export default connect(mapStateToProps,{login})(Login);
