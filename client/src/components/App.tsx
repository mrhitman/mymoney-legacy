import Goals from "./Goals";
import Layout from "./containers/Layout";
import React from "react";
import reducer from "../reducers";
import Register from "./containers/Register";
import SignIn from "./containers/SignIn";
import WalletList from "./WalletList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(
  reducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Layout>
              <Route path="/signin" component={SignIn} />
              <Route path="/register" component={Register} />
              <Route path="/wallets" component={WalletList} />
              <Route path="/goals" component={Goals} />
            </Layout>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
