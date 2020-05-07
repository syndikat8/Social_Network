import React from "react";
import {Route} from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";




const App = () => {

  return (
    <div className="app-wrapper">
      <Header/>
      <Nav/>
      <div className="app-wrapper-content">
        <Route path="/profile" render={() => <ProfileContainer/>}/>
        <Route exact path="/dialogs" render={() => <DialogsContainer/>}/>
        <Route exact path="/music" render={() => <Music/>}/>
        <Route exact path="/news" render={() => <News/>}/>
        <Route exact path="/settings" render={() => <Settings/>}/>
        <Route exact path="/users" render={() => <UsersContainer/>}/>

      </div>
    </div>

  );
};


export default App;
