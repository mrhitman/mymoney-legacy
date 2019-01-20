import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import { Formik } from 'formik';
import React, { Component } from 'react';
import { t } from '../i18n';
import { walletCreate } from '../api';

interface IProps {
  currencyList: any[];
}
const categories = [
  { id: 1, name: t('cash') },
  { id: 2, name: t('deposits') },
  { id: 3, name: t('credits') },
  { id: 4, name: t('other') },
  { id: 5, name: t('bank') },
  { id: 6, name: t('contragents') },
  { id: 7, name: t('property') }
];

export class WalletAdd extends Component<IProps> {
  initialValues = {
    name: 'some',
    // category: 1,
    currency_id: 1,
    add_budget: false,
    show_panel: false,
    in_balance: false
  };

  render() {
    return (
      <main>
        <CssBaseline />
        <Formik
          initialValues={this.initialValues}
          onSubmit={this.handleSubmit}
          render={({ handleSubmit, handleChange, values }) => (
            <form onSubmit={handleSubmit}>
              <TextField
                name='name'
                label='Name'
                type='text'
                value={values.name}
                onChange={handleChange}
                fullWidth
              />
              <TextField
                name='category'
                label='Category'
                // value={values.category}
                value={1}
                onChange={handleChange}
                fullWidth
                select
              >
                {categories.map(category => (
                  <MenuItem value={category.id} key={category.id}>
                    {category.name}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                name='currency_id'
                label='Currency'
                value={values.currency_id}
                onChange={handleChange}
                fullWidth
                select
              >
                {this.props.currencyList.map(item => {
                  return (
                    <MenuItem value={item.id} key={item.id}>
                      {item.name} {item.symbol}
                    </MenuItem>
                  );
                })}
              </TextField>
              <Divider />
              <div>
                <FormControlLabel
                  name='add_budget'
                  onChange={handleChange}
                  control={<Switch color='primary' />}
                  label='Add to budget'
                />
                <FormControlLabel
                  name='show_panel'
                  onChange={handleChange}
                  control={<Switch color='primary' />}
                  label='Show on panel'
                />
                <FormControlLabel
                  name='in_balance'
                  onChange={handleChange}
                  control={<Switch color='primary' />}
                  label='Take account of Balance'
                />
              </div>
              <Divider />
              <div>
                <Button type='submit' color='primary' variant='outlined'>
                  Create
                </Button>
                <Button color='secondary' variant='outlined'>
                  Cancel
                </Button>
              </div>
            </form>
          )}
        />
      </main>
    );
  }

  private handleSubmit = (values: any, actions: any) => {
    console.log(values);
    walletCreate(values)
      .then(console.log)
      .catch(console.log);
  };
}

export default WalletAdd;
