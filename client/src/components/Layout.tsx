import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import ButtonWithLink from "./misc/ButtonWithLink";
import CssBaseline from "@material-ui/core/CssBaseline";
import React from "react";
import styles, { IStyles } from "./styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import { Grid, withStyles } from "@material-ui/core";
import { logout } from "../api";
import { signout } from "../actions/user";

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
        <AppBar position="static" color="default">
          <Toolbar>
            <Grid container>
              <Grid item xs={2} />
              <Grid item>
                <Typography variant="h6" color="inherit" noWrap>
                  My Money
                </Typography>
              </Grid>
              <Grid item>
                <ButtonWithLink to="/wallets">Wallets</ButtonWithLink>
              </Grid>
              <Grid item xs={6} />
              <Grid item xs>
                {!isAuth && (
                  <ButtonWithLink
                    color="primary"
                    variant="outlined"
                    to="/signin"
                  >
                    Sign in
                  </ButtonWithLink>
                )}
                {!isAuth && (
                  <ButtonWithLink
                    color="primary"
                    variant="outlined"
                    to="/register"
                  >
                    Register
                  </ButtonWithLink>
                )}
                {isAuth && (
                  <Button
                    color="secondary"
                    variant="outlined"
                    onClick={this.handleLogout}
                  >
                    Logout
                  </Button>
                )}
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <div>{this.props.children}</div>
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
