import { Form, Formik, FormikActions, FormikProps } from 'formik';
import { inject } from 'mobx-react';
import React, { Component } from 'react';
import {
  Button,
  Container,
  FormControl,
  FormGroup,
  FormLabel
} from 'react-bootstrap';
import { InjectedProps } from '../types';

export interface SignInForm {
  email: string;
  password: string;
}

@inject('store')
export class SignIn extends Component {
  private get injected() {
    return this.props as InjectedProps;
  }

  private initialValues = () => ({
    email: '',
    password: ''
  });

  public render() {
    return (
      <Formik
        onSubmit={this.handleSubmit}
        initialValues={this.initialValues()}
        render={this.renderForm}
      />
    );
  }

  protected handleSubmit = (values: SignInForm, actions: FormikActions<SignInForm>) => {
    actions.setSubmitting(true);
    const { login } = this.injected.store;
    login(values)
      .finally(() => {
        actions.setSubmitting(false);
      });
  };

  protected renderForm = (bag: FormikProps<SignInForm>) => (
    <Form>
      <Container>
        <FormGroup>
          <FormLabel>Email</FormLabel>
          <FormControl id='email' type='email' onChange={bag.handleChange} />
        </FormGroup>
        <FormGroup>
          <FormLabel>Password</FormLabel>
          <FormControl id='password' type='password' onChange={bag.handleChange}/>
        </FormGroup>
        <Button type='submit'>Sign in</Button>
      </Container>
    </Form>
  );
}

export default SignIn;
