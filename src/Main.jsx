import React from "react";
import {Provider} from "react-redux";
import store from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import AppContainer from "./components/App";


class Main extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Provider store={store}>
          <AppContainer/>
        </Provider>
      </BrowserRouter>
    )
  }
}

export default Main;

