import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";




const App = () => {

  return (
    <div className="app-wrapper">
      <Header/>
      <Nav/>
      <div className="app-wrapper-content">
        <Route path="/profile" render={() => <Profile/>}/>
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
