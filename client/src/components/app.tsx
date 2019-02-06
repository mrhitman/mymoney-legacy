import { Provider } from 'mobx-react';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Store } from '../store';
import Dashboard from './dashboard';
import Layout from './layout';
import SignIn from './sign-in';

const store = new Store();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Layout>
            <Switch>
              <Route path='/signin' component={SignIn} />
              <Route path='/' component={Dashboard} />
            </Switch>
          </Layout>
        </Router>
      </Provider>
    );
  }
}

export default App;
