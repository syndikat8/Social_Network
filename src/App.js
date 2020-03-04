import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Profile from "./components/Profile";

const App = () => {
  return (
    <div className="container">
      <Header/>
      <Nav/>
      <Profile/>

    </div>
  );
};


export default App;
