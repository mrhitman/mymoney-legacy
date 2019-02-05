import { Form, Formik, FormikProps } from 'formik';
import React, { Component } from 'react';
import { Button, Container, FormControl, FormGroup, FormLabel } from 'react-bootstrap';

export interface SignInForm {
  email: string;
  password: string;
}

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

  protected handleSubmit = (values: SignInForm) => {
    console.log(values);
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
          <FormControl id='password' type='password' onChange={bag.handleChange} />
        </FormGroup>
        <Button type='submit'>Sign in</Button>
      </Container>
    </Form>
  );
}

export default SignIn;
