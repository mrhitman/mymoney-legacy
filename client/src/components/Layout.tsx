import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import ButtonWithLink from "./misc/ButtonWithLink";
import CssBaseline from "@material-ui/core/CssBaseline";
import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { createStyles, Theme, withStyles } from "@material-ui/core";

const styles = (theme: Theme) =>
  createStyles({
    main: {
      width: "auto"
    }
  });

export interface LayoutProps {
  children: React.ReactNode;
}
const Layout = (props: LayoutProps) => {
  return (
    <>
      <CssBaseline />
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Company name
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
        </Toolbar>
      </AppBar>
      <div>{props.children}</div>;
    </>
  );
};

export default withStyles(styles)(Layout);
