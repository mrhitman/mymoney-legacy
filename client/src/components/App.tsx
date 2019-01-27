import { Provider } from 'mobx-react';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Store } from '../store';
import Layout from './Layout';
import SignIn from './SignIn';
import WalletList from './WalletList';

const store = new Store();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Layout>
              <Route path='/signin' component={SignIn} />
              <Route path='/wallets' component={WalletList} />
            </Layout>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
