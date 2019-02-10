import { Provider } from 'mobx-react';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import { Store } from '../store';
import Dashboard from './dashboard';
import SignIn from './sign-in';

const store = new Store();

class App extends React.Component {
  render() {
    const { isLoggined } = store;
    if (!isLoggined) {
      return (
        <Provider store={store}>
          <Router>
            <Switch>
              <Route path='/signin' component={SignIn} />
              <Route path='/' component={() => <Redirect to='/signin' />} />
            </Switch>
          </Router>
        </Provider>
      );
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
        <Provider store={store}>
          <Router>
            <Container>
              <Switch>
                <Route path='/dashboard' component={Dashboard} />
                <Route path='/' component={() => <Redirect to='/dashboard' />}/>
              </Switch>
            </Container>
          </Router>
        </Provider>
      </>
    );
  }
}

export default App;
