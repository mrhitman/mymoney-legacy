import { Form, Formik } from 'formik';
import React, { Component } from 'react';
import { Button, Container, FormControl, FormGroup, FormLabel } from 'react-bootstrap';

export class SignIn extends Component {
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

  protected handleSubmit = () => {};

  protected renderForm = () => (
    <Form>
      <Container>
        <FormGroup>
          <FormLabel>Email</FormLabel>
          <FormControl type='email' />
        </FormGroup>
        <FormGroup>
          <FormLabel>Password</FormLabel>
          <FormControl type='password' />
        </FormGroup>
        <Button type='submit'>Sign in</Button>
      </Container>
    </Form>
  );
}

export default SignIn;
