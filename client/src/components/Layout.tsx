import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import ButtonWithLink from "./misc/ButtonWithLink";
import CssBaseline from "@material-ui/core/CssBaseline";
import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import { logout } from "../api";
import { signout } from "../actions/user";

interface IProps {
  children: React.ReactNode;
}

interface IDispatchProps {
  signout: typeof signout;
}

class Layout extends React.Component<IProps & IDispatchProps> {
  public render() {
    return (
      <>
        <CssBaseline />
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              My Money
            </Typography>
            <Button>Features</Button>
            <Button>Enterprise</Button>
            <Button>Support</Button>
            <ButtonWithLink color="primary" variant="outlined" to="/signin">
              Sign in
            </ButtonWithLink>
            <ButtonWithLink color="primary" variant="outlined" to="/register">
              Register
            </ButtonWithLink>
            <Button
              color="secondary"
              variant="outlined"
              onClick={this.handleLogout}
            >
              Logout
            </Button>
          </Toolbar>
        </AppBar>
        <div>{this.props.children}</div>;
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
)(Layout);
