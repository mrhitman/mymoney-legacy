import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import { login } from '../api';
import { signin } from '../actions/user';
import { IStyles } from './styles';
import { Snackbar, TextField } from '@material-ui/core';
import { Formik, FormikActions } from 'formik';
import { t } from '../i18n';

interface IProps {
  classes: IStyles;
}

interface IDispatchProps {
  signin: typeof signin;
}

export interface ITarget {
  name: string;
  value: string;
}

class SignIn extends React.Component<IProps & IDispatchProps> {
  public initialValues = {
    email: '',
    password: ''
  };

  public render() {
    const { classes } = this.props;

    return (
      <main className={classes.main}>
        <CssBaseline />

        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockIcon />
          </Avatar>
          <Typography component='h3' variant='h5'>
            Sign in
          </Typography>
          <Formik
            initialValues={this.initialValues}
            onSubmit={this.handleSubmit}
            render={({ isSubmitting, handleChange, handleSubmit, error }) => (
              <form className={classes.form} onSubmit={handleSubmit}>
                <Snackbar
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center'
                  }}
                  open={!!error}
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
                  className={classes.submit}
                  disabled={isSubmitting}
                  fullWidth
                >
                  Sign in
                </Button>
              </form>
            )}
          />
        </Paper>
      </main>
    );
  }

  handleSubmit = (values: any, actions: any) => {
    login(values)
      .then(this.props.signin)
      .catch(error => {
        actions.setError(t(`signin${error.response.status}`));
      })
      .finally(() => {
        actions.setSubmitting(false);
      });
  };
}

export default SignIn;
