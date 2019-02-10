import { Form, FormikProps } from 'formik';
import React from 'react';
import { Button, Container, FormControl, FormGroup, FormLabel } from 'react-bootstrap';

export interface CurrencyForm {
  id?: number;
  name: string;
  description: string;
  symbol: string;
}

export default (bag: FormikProps<CurrencyForm>) => (
  <Form>
    <Container>
      <FormGroup>
        <FormLabel>Name</FormLabel>
        <FormControl id='name' onChange={bag.handleChange} />
      </FormGroup>
      <FormGroup>
        <FormLabel>Description</FormLabel>
        <FormControl id='description' onChange={bag.handleChange} />
      </FormGroup>
      <FormGroup>
        <FormLabel>Symbol</FormLabel>
        <FormControl id='symbol' onChange={bag.handleChange} />
      </FormGroup>
      <Button type='submit'>Add currency</Button>
    </Container>
  </Form>
);
