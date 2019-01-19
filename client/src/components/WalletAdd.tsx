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

interface IProps {
  currencyList: any[];
}

export class WalletAdd extends Component<IProps> {
  initialValues = {
    name: 'some',
    category_id: 1,
    currency_id: 1
  };

  render() {
    return (
      <main>
        <CssBaseline />
        <Formik
          initialValues={this.initialValues}
          onSubmit={this.handleSubmit}
          render={({ handleSubmit, handleChange, handleBlur, values }) => (
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
                name='category_id'
                label='Category'
                value={values.category_id}
                onChange={handleChange}
                fullWidth
                select
              >
                <MenuItem value={1} key={1}>
                  {t('cash')}
                </MenuItem>
                <MenuItem value={2} key={2}>
                  {t('deposits')}
                </MenuItem>
                <MenuItem value={3} key={3}>
                  {t('credits')}
                </MenuItem>
                <MenuItem value={4} key={4}>
                  {t('other')}
                </MenuItem>
                <MenuItem value={5} key={5}>
                  {t('bank')}
                </MenuItem>
                <MenuItem value={6} key={6}>
                  {t('contragents')}
                </MenuItem>
                <MenuItem value={7} key={7}>
                  {t('property')}
                </MenuItem>
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
                  onChange={handleChange}
                  control={<Switch color='primary' />}
                  label='Add to budget'
                />
                <FormControlLabel
                  onChange={handleChange}
                  control={<Switch color='primary' />}
                  label='Show on panel'
                />
                <FormControlLabel
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
  };
}

export default WalletAdd;
