import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
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
          <Navbar bg='dark' variant='dark'>
            <Navbar.Brand href='#home'>My money</Navbar.Brand>
            <Nav className='mr-auto'>
              <LinkContainer to='/dashboard'>
                <Nav.Link>Dashboard</Nav.Link>
              </LinkContainer>
              <NavDropdown title='Transactions' id='collasible-nav-dropdown'>
                <NavDropdown.Item href=''>Records</NavDropdown.Item>
                <NavDropdown.Item href=''>Templates</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href=''>Import</NavDropdown.Item>
                <NavDropdown.Item href=''>Export</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href=''>Analize</Nav.Link>
              <Nav.Link href=''>Budget</Nav.Link>
              <LinkContainer to='/wallets'>
                <Nav.Link>Wallets</Nav.Link>
              </LinkContainer>
              <Nav.Link>
                <div onClick={logout}>Logout</div>
              </Nav.Link>
            </Nav>
          </Navbar>
          <Container>
            <Switch>
              <Route path='/dashboard' component={Dashboard} />
              <Route path='/wallets' component={Dashboard} />
              <Redirect to='/dashboard' />
            </Switch>
          </Container>
        </>
      </Router>
    );
  };
}

export default Layout;
