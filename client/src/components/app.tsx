import React from 'react';
import { Store } from '../store';
import Layout from './layout';
import { Provider } from 'mobx-react';

const store = new Store();

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Layout />
      </Provider>
    );
  }
}

export default App;
