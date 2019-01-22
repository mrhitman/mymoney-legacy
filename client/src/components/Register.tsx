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
import { IStyles } from "./Styles";
import { ITarget } from "./SignIn";
import { register } from '../api';

interface IProps {
  classes: IStyles;
}

interface IState {
  name: string;
  last_name: string;
  birthday: string;
  email: string;
  password: string;
  "password-confirm": string;
}

class Register extends React.Component<IProps, IState> {
  public state = {
    name: "",
    last_name: "",
    birthday: "",
    email: "",
    password: "",
    "password-confirm": ""
  };

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
          <form className={classes.form} onSubmit={this.handleSubmit}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="name">First Name</InputLabel>
              <Input name="name" type="text" onChange={this.handleChange} />
            </FormControl>
            <FormControl margin="normal" fullWidth>
              <InputLabel htmlFor="last_name">Last Name</InputLabel>
              <Input
                name="last_name"
                type="text"
                onChange={this.handleChange}
              />
            </FormControl>
            <FormControl margin="normal" fullWidth>
              <InputLabel htmlFor="birthday" shrink>
                Birthday
              </InputLabel>
              <Input name="birthday" type="date" onChange={this.handleChange} />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email</InputLabel>
              <Input name="email" type="email" onChange={this.handleChange} />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                name="password"
                type="password"
                onChange={this.handleChange}
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password-confirm">
                Password Confirmation
              </InputLabel>
              <Input
                name="password-confirm"
                type="password"
                onChange={this.handleChange}
              />
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

  handleChange = (e: React.SyntheticEvent) => {
    const target = (e.target as any) as ITarget;
    this.setState({ [target.name]: target.value } as any);
  };

  handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    register(this.state).then(console.log);
  };
}

export default Register;
