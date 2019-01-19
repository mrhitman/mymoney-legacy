import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { t } from '../../i18n';
import ButtonWithLink from './ButtonWithLink';
import { Link } from 'react-router-dom';

interface IProps {
  isAuth: boolean;
  handleLogout: () => void;
}

export class Header extends Component<IProps> {
  render() {
    const { isAuth, handleLogout } = this.props;
    return (
      <div>
        <AppBar position='fixed' color='default' style={{ zIndex: 9999 }}>
          <Toolbar>
            <Grid container>
              <Grid item xs={3} />
              <Grid item>
                <Link to='/' style={{ textDecoration: 'none' }}>
                  <Typography variant='h6' color='textSecondary' noWrap>
                    {t('title')}
                  </Typography>
                </Link>
              </Grid>
              <Grid item xs={4} />
              <Grid item xs>
                {!isAuth && (
                  <ButtonWithLink
                    color='primary'
                    variant='outlined'
                    to='/signin'
                  >
                    {t('signin')}
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
                    onClick={handleLogout}
                  >
                    Logout
                  </Button>
                )}
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Header;
