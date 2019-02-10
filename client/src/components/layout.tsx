import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import { InjectedProps } from '../types';
import Dashboard from './dashboard';
import SignIn from './sign-in';

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
          <Route path='/' component={() => <Redirect to='/signin' />} />
        </Switch>
      </Router>
    );
  };

  protected renderPrivateLayout = () => {
    const { logout } = this.injected.store;
    return (
      <>
        <Navbar bg='dark' variant='dark'>
          <Navbar.Brand href='#home'>My money</Navbar.Brand>
          <Nav className='mr-auto'>
            <Nav.Link href='#home'>Dashboard</Nav.Link>
            <NavDropdown title='Transactions' id='collasible-nav-dropdown'>
              <NavDropdown.Item href=''>Records</NavDropdown.Item>
              <NavDropdown.Item href=''>Templates</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href=''>Import</NavDropdown.Item>
              <NavDropdown.Item href=''>Export</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href=''>Analize</Nav.Link>
            <Nav.Link>
              <div onClick={logout}>Logout</div>
            </Nav.Link>
          </Nav>
        </Navbar>
        <Router>
          <Container>
            <Switch>
              <Route path='/dashboard' component={Dashboard} />
              <Route exact path='/' component={this.redirectIndex} />
            </Switch>
          </Container>
        </Router>
      </>
    );
  };

  protected redirectIndex = () => <Redirect to='/dashboard' />;
}

export default Layout;
