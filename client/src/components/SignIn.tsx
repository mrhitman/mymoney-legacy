import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { login } from '../api';
import { signin } from '../actions/user';
import { IStyles } from './styles';
import { Snackbar, TextField } from '@material-ui/core';

interface IProps {
  classes: IStyles;
}

interface IDispatchProps {
  signin: typeof signin;
}

interface IState {
  email: string;
  password: string;
  error: string | undefined;
}

export interface ITarget {
  name: string;
  value: string;
}

class SignIn extends React.Component<IProps & IDispatchProps, IState> {
  public state = {
    email: '',
    password: '',
    error: undefined
  };

  public render() {
    const { classes } = this.props;

    return (
      <main className={classes.main}>
        <CssBaseline />
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
          }}
          open={!!this.state.error}
          autoHideDuration={3000}
          ContentProps={{ 'aria-describedby': 'message-id' }}
          message={<span id='message-id'>{this.state.error}</span>}
        />
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockIcon />
          </Avatar>
          <Typography component='h3' variant='h5'>
            Sign in
          </Typography>
          <form className={classes.form} onSubmit={this.handleSubmit}>
            <TextField
              type='email'
              margin='normal'
              fullWidth
              name='email'
              autoFocus
              onChange={this.handleChange}
              required
              label='Email Address'
            />
            <TextField
              type='password'
              margin='normal'
              fullWidth
              name='password'
              autoComplete='current-password'
              onChange={this.handleChange}
              required
              label='Password'
            />
            <FormControlLabel
              control={<Checkbox value='remember' color='primary' />}
              label='Remember me'
            />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
            >
              Sign in
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

    login(this.state)
      .then(this.props.signin)
      .catch(error => {
        this.setState({ error: 'Invalid email or password' });
      });
  };
}

export default SignIn;
