import { withStyles } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { signout } from '../actions/user';
import { logout } from '../api';
import Header from './misc/Header';
import LeftMenu from './misc/LeftMenu';
import styles, { IStyles } from './Styles';
import { Redirect } from 'react-router';
import { BrowserRouterProps } from 'react-router-dom';

interface IProps {
  children: React.ReactNode;
  classes: IStyles;
}

interface IDispatchProps {
  user: any;
  signout: typeof signout;
  location: any;
}

const UnsecuredRoutes = ['/signin', '/register'];

class Layout extends React.Component<IProps & IDispatchProps> {
  public render() {
    const { user, location } = this.props;
    const isAuth = !!user.id;
    return (
      <>
        <CssBaseline />
        <Header isAuth={isAuth} handleLogout={this.handleLogout} />
        {isAuth && <LeftMenu />}
        {!isAuth && location.pathname in UnsecuredRoutes && (
          <Redirect to='/signin' />
        )}
        <div style={{ paddingTop: 50 }}>{this.props.children}</div>
      </>
    );
  }

  protected handleLogout = () => {
    logout().then(this.props.signout);
  };
}

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      signout
    },
    dispatch
  );

export default connect(
  state => state,
  mapDispatchToProps
)(withStyles(styles)(Layout as any));
