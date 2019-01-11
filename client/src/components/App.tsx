import Layout from "./Layout";
import React, { Component } from "react";
import reducer from "../reducers";
import Register from "./Register";
import SignIn from "./SignIn";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(reducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Layout>
            <Route path="/signin" component={SignIn} />
            <Route path="/register" component={Register} />
          </Layout>
        </Router>
      </Provider>
    );
  }
}

export default App;
