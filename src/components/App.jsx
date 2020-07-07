import React, {Suspense} from "react";
import {Route, withRouter} from "react-router-dom";
import "./App.css";
import {connect} from "react-redux";
import {compose} from "redux";
import Preloader from "./common/Preloader/Preloder";
import HeaderContainer from "./Header/HeaderContainer";
import Nav from "./Nav/Nav";
import {initializeApp} from "../redux/app-reducer";
import Login from "./Login/Login";

const ProfileContainer = React.lazy(() => import("./Profile/ProfileContainer"));
const DialogsContainer = React.lazy(() => import("./Dialogs/DialogsContainer"));
const Music = React.lazy(() => import("./Music/Music"));
const News = React.lazy(() => import("./News/News"));
const Settings = React.lazy(() => import("./Settings/Settings"));
const UsersContainer = React.lazy(() => import("./Users/UsersContainer"));

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
            <Suspense fallback={<Preloader/>}>
              <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
              <Route exact path="/dialogs" render={() => <DialogsContainer/>}/>
              <Route exact path="/music" render={() => <Music/>}/>
              <Route exact path="/news" render={() => <News/>}/>
              <Route exact path="/settings" render={() => <Settings/>}/>
              <Route exact path="/users" render={() => <UsersContainer/>}/>
            </Suspense>
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