import { Grid, withStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { signout } from '../actions/user';
import { logout } from '../api';
import { t } from '../i18n';
import ButtonWithLink from './misc/ButtonWithLink';
import LeftMenu from './misc/LeftMenu';
import styles, { IStyles } from './styles';

interface IProps {
  children: React.ReactNode;
  classes: IStyles;
}

interface IDispatchProps {
  signout: typeof signout;
}

class Layout extends React.Component<IProps & IDispatchProps> {
  public render() {
    const user = (this.props as any).user;
    const isAuth = !!user.id;
    return (
      <>
        <CssBaseline />
        <AppBar position='fixed' color='default' style={{ zIndex: 9999 }}>
          <Toolbar>
            <Grid container>
              <Grid item xs={3} />
              <Grid item>
                <Typography variant='h6' color='textSecondary' noWrap>
                  {t('title')}
                </Typography>
              </Grid>
              <Grid item xs={6} />
              <Grid item xs>
                {!isAuth && (
                  <ButtonWithLink
                    color='primary'
                    variant='outlined'
                    to='/signin'
                  >
                    Sign in
                  </ButtonWithLink>
                )}
                {!isAuth && (
                  <ButtonWithLink
                    color='primary'
                    variant='outlined'
                    to='/register'
                  >
                    Register
                  </ButtonWithLink>
                )}
                {isAuth && (
                  <Button
                    color='secondary'
                    variant='outlined'
                    onClick={this.handleLogout}
                  >
                    Logout
                  </Button>
                )}
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <LeftMenu />
        <div style={{ paddingTop: 50, paddingLeft: 240 }}>
          {this.props.children}
        </div>
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
