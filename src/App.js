import React from "react";
import {Route, withRouter} from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPages from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloder";


class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp()

  }

  render() {
    if (!this.props.initialized) {
      return <Preloader/>
    }

    return (

      <div className="app">
        <div className="app-wrapper">
          <HeaderContainer/>
          <Nav/>
          <div className="app-wrapper-content">
            <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
            <Route exact path="/dialogs" render={() => <DialogsContainer/>}/>
            <Route exact path="/music" render={() => <Music/>}/>
            <Route exact path="/news" render={() => <News/>}/>
            <Route exact path="/settings" render={() => <Settings/>}/>
            <Route exact path="/users" render={() => <UsersContainer/>}/>
            <Route path="/login" render={() => <LoginPages/>}/>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})


export default compose(
  withRouter,
  connect(mapStateToProps, {initializeApp}))(App);