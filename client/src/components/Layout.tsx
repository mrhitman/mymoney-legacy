import CssBaseline from '@material-ui/core/CssBaseline';
import { inject, observer } from 'mobx-react';
import React from 'react';
import { Redirect } from 'react-router';
import { Store } from '../store';
import Header from './misc/Header';
import LeftMenu from './misc/LeftMenu';

@observer
@inject('store')
class Layout extends React.Component<{ store?: Store }> {
  public render() {
    const isAuth = this.props.store!.isAuth;
    return (
      <>
        <CssBaseline />
        <Header isAuth={isAuth} handleLogout={() => {}} />
        {isAuth && <LeftMenu />}
        <Redirect to='/signin' />
        <div style={{ paddingTop: 50 }}>{this.props.children}</div>
      </>
    );
  }
}

export default Layout;
