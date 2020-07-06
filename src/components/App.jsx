import React from "react";
import {Route, withRouter} from "react-router-dom";
import "./App.css";
import {connect} from "react-redux";
import {compose} from "redux";
import DialogsContainer from "./Dialogs/DialogsContainer";
import Preloader from "./common/Preloader/Preloder";
import HeaderContainer from "./Header/HeaderContainer";
import Nav from "./Nav/Nav";
import ProfileContainer from "./Profile/ProfileContainer";
import Music from "./Music/Music";
import News from "./News/News";
import Settings from "./Settings/Settings";
import UsersContainer from "./Users/UsersContainer";
import {initializeApp} from "../redux/app-reducer";
import Login from "./Login/Login";

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
            <Route path="/login" render={() => <Login/>}/>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, {initializeApp}))(App);

export default AppContainer;