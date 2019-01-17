import AppBar from "@material-ui/core/AppBar";
import BillIcon from "./misc/BillIcon";
import Button from "@material-ui/core/Button";
import ButtonWithLink from "./misc/ButtonWithLink";
import CardTravelIcon from "@material-ui/icons/CardTravel";
import CssBaseline from "@material-ui/core/CssBaseline";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import React from "react";
import styles, { IStyles } from "./styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import WalletIcon from "./misc/WalletIcon";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import {
  Grid,
  withStyles,
  Drawer,
  ListItem,
  List,
  ListItemText,
  ListItemIcon,
  Divider
} from "@material-ui/core";
import { logout } from "../api";
import { signout } from "../actions/user";
import { t } from "../i18n";

interface IProps {
  children: React.ReactNode;
  classes: IStyles;
}

interface IDispatchProps {
  signout: typeof signout;
}

class Layout extends React.Component<IProps & IDispatchProps> {
  state = {
    open: false
  };

  public render() {
    const user = (this.props as any).user;
    const isAuth = !!user.id;
    return (
      <>
        <CssBaseline />
        <AppBar position="static" color="default">
          <Toolbar>
            <Grid container>
              <Grid item xs={3} />
              <Grid item>
                <Typography variant="h6" color="textSecondary" noWrap>
                  {t("title")}
                </Typography>
              </Grid>
              <Grid item xs={6} />
              <Grid item xs>
                <Button onClick={() => this.setState({ open: true })}>
                  open
                </Button>
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
        <Drawer
          open={this.state.open}
          onClose={() => this.setState({ open: false })}
          variant="persistent"
          anchor="left"
        >
          <List>
            <Divider />
            <ListItem button key="wallets">
              <ListItemIcon>
                <WalletIcon />
              </ListItemIcon>
              <ListItemText>Wallets</ListItemText>
            </ListItem>
            <ListItem button key="analize">
              <ListItemIcon>
                <EqualizerIcon />
              </ListItemIcon>
              <ListItemText>Analize</ListItemText>
            </ListItem>
            <ListItem button key="bills">
              <ListItemIcon>
                <BillIcon />
              </ListItemIcon>
              <ListItemText>Bills</ListItemText>
            </ListItem>
            <ListItem button key="budget">
              <ListItemIcon>
                <CardTravelIcon />
              </ListItemIcon>
              <ListItemText>Budget</ListItemText>
            </ListItem>
            <ListItem button key="goals">
              <ListItemIcon>
                <WalletIcon />
              </ListItemIcon>
              <ListItemText>Goals</ListItemText>
            </ListItem>
            <ListItem button key="other">
              <ListItemIcon>
                <MoreVertIcon />
              </ListItemIcon>
              <ListItemText>Other</ListItemText>
            </ListItem>
          </List>
        </Drawer>
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
