import Categories from './Categories';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import MenuItem from '@material-ui/core/MenuItem';
import React, { Component } from 'react';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { t } from '../i18n';
import { Formik } from 'formik';

interface IProps {
  currencyList: any[];
}

export class WalletAdd extends Component<IProps> {
  render() {
    return (
      <main>
        <CssBaseline />
        <Formik
          initialValues={{}}
          onSubmit={this.handleSubmit}
          render={({ handleSubmit, handleChange }) => (
            <form onSubmit={handleSubmit}>
              <TextField
                type='text'
                label='Name'
                onChange={handleChange}
                fullWidth
              />
              <TextField
                select
                label='Type'
                value='cash'
                onChange={handleChange}
                fullWidth
              >
                <Categories />
              </TextField>
              <TextField
                select
                label='Currency'
                onChange={handleChange}
                fullWidth
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
                <Button color='primary' variant='outlined'>
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
