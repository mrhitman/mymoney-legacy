import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { InjectedProps } from '../types';
import Categories from './categories/categories';
import Currencies from './currencies/currencies';
import Dashboard from './dashboard';
import Goals from './goals/goals';
import SignIn from './sign-in';
import TopMenu from './top-menu';
import Wallets from './wallets/wallets';

@inject('store')
@observer
export class Layout extends Component {
  protected get injected() {
    return this.props as InjectedProps;
  }

  render() {
    const { isLoggined } = this.injected.store;
    return isLoggined ? this.renderPrivateLayout() : this.renderPublicLayout();
  }

  protected renderPublicLayout = () => {
    return (
      <Router>
        <Switch>
          <Route exact path='/signin' component={SignIn} />
          <Redirect to='/signin' />
        </Switch>
      </Router>
    );
  };

  protected renderPrivateLayout = () => {
    const { logout } = this.injected.store;
    return (
      <Router>
        <>
          <TopMenu logout={logout} />
          <Container>
            <Switch>
              <Route path='/categories' component={Categories} />
              <Route path='/currencies' component={Currencies} />
              <Route exact path='/' component={Dashboard} />
              <Route path='/dashboard' component={Dashboard} />
              <Route path='/goals' component={Goals} />
              <Route path='/wallets' component={Wallets} />
              <Redirect to='/' />
            </Switch>
          </Container>
        </>
      </Router>
    );
  };
}

export default Layout;
