import { inject, observer } from 'mobx-react';
import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Redirect } from 'react-router';
import { InjectedProps } from '../types';
import { NavDropdown } from 'react-bootstrap';

@inject('store')
@observer
class Layout extends React.Component {
  private get injected() {
    return this.props as InjectedProps;
  }

  public render() {
    const { isLoggined } = this.injected.store;
    if (!isLoggined) {
      <Redirect to='/signin' />;
    }
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
          </Nav>
        </Navbar>
        <Container>{this.props.children}</Container>
      </>
    );
  }
}

export default Layout;
