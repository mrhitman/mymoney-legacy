import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import Avatar from "@material-ui/core/Avatar";
import AccountIcon from "@material-ui/icons/AccountCircleOutlined";
import { IStyles } from "./theme";

interface IProps {
  classes: IStyles;
}

class Register extends React.Component<IProps> {
  public render() {
    const { classes } = this.props;
    return (
      <main id="register" className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <AccountIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Welcome
          </Typography>
          <form className={classes.form}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="last_name">First Name</InputLabel>
              <Input id="last_name" type="text" />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="last_name">Last Name</InputLabel>{" "}
              <Input id="last_name" type="text" />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email</InputLabel>
              <Input id="email" type="email" />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email-confirm">
                Email Confirmation
              </InputLabel>
              <Input id="email-confirm" type="email" />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input id="password" type="password" />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password-confirm">
                Password Confirmation
              </InputLabel>
              <Input id="password-confirm" type="password" />
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Submit
            </Button>
          </form>
        </Paper>
      </main>
    );
  }
}

export default Register;
