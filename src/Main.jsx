import React from "react";
import {Provider} from "react-redux";
import store from "./redux/redux-store";
import {HashRouter} from "react-router-dom";
import AppContainer from "./components/App";


class Main extends React.Component {

  render() {
    return (
      <HashRouter>
        <Provider store={store}>
          <AppContainer/>
        </Provider>
      </HashRouter>
    )
  }
}

export default Main;

