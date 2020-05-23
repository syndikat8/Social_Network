import React from "react";
import {Route} from "react-router-dom";
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




const App = () => {

  return (
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

  );
};


export default App;
