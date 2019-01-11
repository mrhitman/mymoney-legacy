import React, { Component } from "react";
import SignIn from "./SignIn";
import Layout from "./Layout";

class App extends Component {
  render() {
    return (
      <Layout>
        <SignIn />
      </Layout>
    );
  }
}

export default App;
