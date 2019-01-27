import { Snackbar, TextField } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import LockIcon from '@material-ui/icons/LockOutlined';
import { Formik, FormikActions, FormikProps } from 'formik';
import { inject, observer } from 'mobx-react';
import React from 'react';
import { Redirect } from 'react-router';
import { Store } from '../store';

export interface ITarget {
  name: string;
  value: string;
}

export interface SignInProps {
  email: string;
  password: string;
}

@inject('store')
@observer
class SignIn extends React.Component<{ store: Store }> {
  public state = {
    showStatus: false,
    done: false
  };

  public initialValues = {
    email: '',
    password: ''
  };

  handleHideStatus = () => {
    this.setState({ showStatus: false });
  };

  public render() {
    const { theme } = this.props.store.config;
    return (
      <main className={theme.main}>
        <CssBaseline />
        {this.state.done && <Redirect to='/' />}
        <Paper className={theme.paper}>
          <Avatar className={theme.avatar}>
            <LockIcon />
          </Avatar>
          <Typography component='h3' variant='h5'>
            Sign in
          </Typography>
          <Formik
            initialValues={this.initialValues}
            onSubmit={this.handleSubmit}
            render={this.renderForm}
          />
        </Paper>
      </main>
    );
  }

  renderForm = ({
    isSubmitting,
    handleChange,
    handleSubmit,
    error
  }: FormikProps<SignInProps>) => {
    const { theme } = this.props.store.config;
    return (
      <form className={theme.form} onSubmit={handleSubmit}>
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          onClose={this.handleHideStatus}
          open={this.state.showStatus}
          autoHideDuration={2000}
          ContentProps={{ 'aria-describedby': 'message-id' }}
          message={<span id='message-id'>{error}</span>}
        />
        <TextField
          type='email'
          name='email'
          margin='normal'
          label='Email Address'
          autoFocus
          onChange={handleChange}
          required
          fullWidth
        />
        <TextField
          type='password'
          name='password'
          margin='normal'
          label='Password'
          autoComplete='current-password'
          onChange={handleChange}
          required
          fullWidth
        />
        <FormControlLabel
          control={<Checkbox value='remember' color='primary' />}
          label='Remember me'
        />
        <Button
          type='submit'
          variant='contained'
          color='primary'
          className={theme.submit}
          disabled={isSubmitting}
          fullWidth
        >
          Sign in
        </Button>
      </form>
    );
  };

  handleSubmit = (values: SignInProps, actions: FormikActions<SignInProps>) => {
    this.props.store
      .login(values)
      .then(() => {
        this.setState({ done: true });
      })
      .catch(e => {
        actions.setError('Sign In error ' + e.message);
        this.setState({ showStatus: true });
      })
      .finally(() => actions.setSubmitting(false));
  };
}

export default SignIn;
