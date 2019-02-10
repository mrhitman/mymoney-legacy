import React, { Component } from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export class TopMenu extends Component<{ logout: () => void }> {
  public render() {
    const { logout } = this.props;
    return (
      <Navbar bg='dark' variant='dark'>
        <LinkContainer to='/'>
          <Navbar.Brand>My money</Navbar.Brand>
        </LinkContainer>
        <Nav className='mr-auto'>
          <LinkContainer to='/dashboard'>
            <Nav.Link>Dashboard</Nav.Link>
          </LinkContainer>
          <NavDropdown title='Transactions' id='collasible-nav-dropdown'>
            <LinkContainer to='/transactions'>
              <NavDropdown.Item>Records</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to='/templates'>
              <NavDropdown.Item>Templates</NavDropdown.Item>
            </LinkContainer>
            <NavDropdown.Divider />
            <LinkContainer to='/transactions/import'>
              <NavDropdown.Item>Import</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to='/transactions/export'>
              <NavDropdown.Item>Export</NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>
          <Nav.Link>Analize</Nav.Link>
          <Nav.Link>Budget</Nav.Link>
          <LinkContainer to='/wallets'>
            <Nav.Link>Wallets</Nav.Link>
          </LinkContainer>
          <NavDropdown title='Other' id='collasible-nav-dropdown'>
            <LinkContainer to='/categories'>
              <NavDropdown.Item>Categories</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to='/currencies'>
              <NavDropdown.Item>Currencies</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to='/options'>
              <NavDropdown.Item>Options</NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>
          <Nav.Link>
            <div onClick={logout}>Logout</div>
          </Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

export default TopMenu;
