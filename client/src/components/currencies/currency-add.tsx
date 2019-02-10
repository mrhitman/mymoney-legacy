import { Formik, FormikActions } from 'formik';
import React, { Component } from 'react';
import currencyForm, { CurrencyForm } from './currency-form';

export class CurrencyAdd extends Component {
  protected initialValues = () => ({
    name: '',
    description: '',
    symbol: ''
  });

  public render() {
    return (
      <Formik
        initialValues={this.initialValues()}
        render={currencyForm}
        onSubmit={this.handleSubmit}
      />
    );
  }

  protected handleSubmit = (
    values: CurrencyForm,
    actions: FormikActions<CurrencyForm>
  ) => {
    console.log(values);
  };
}

export default CurrencyAdd;
