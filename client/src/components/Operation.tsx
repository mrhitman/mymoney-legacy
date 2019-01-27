import CssBaseline from '@material-ui/core/CssBaseline';
import InputAdornment from '@material-ui/core/InputAdornment';
import MenuItem from '@material-ui/core/MenuItem';
import withStyles from '@material-ui/core/styles/withStyles';
import TextField from '@material-ui/core/TextField';
import { Formik } from 'formik';
import moment from 'moment';
import React, { Component } from 'react';
import { categoryGetAll, walletGetAll } from '../api';
import styles, { IStyles } from './Styles';

interface IProps {
  classes: IStyles;
  type: string;
}

export class Operation extends Component<IProps & any> {
  initialValues = {};

  componentDidMount() {
    categoryGetAll()
      .then(this.props.getAllCategories)
      .then(() => walletGetAll())
      .then(this.props.getAllWallets);
  }

  render() {
    const { type, wallets, classes, categories } = this.props;
    return (
      <main>
        <CssBaseline />
        <Formik
          initialValues={this.initialValues}
          onSubmit={console.log}
          render={({ handleSubmit }) => (
            <form className={classes.form} onSubmit={handleSubmit}>
              <TextField
                select
                label='From the account'
                helperText='wallet'
                fullWidth
                margin='normal'
              >
                {wallets.map((wallet: any) => (
                  <MenuItem value={wallet.id} key={wallet.id}>
                    {wallet.name}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                select
                label='Category'
                helperText='not selected'
                fullWidth
                margin='normal'
              >
                {categories
                  .filter((item: any) => item.type === type)
                  .map((item: any) => (
                    <MenuItem value={item.id} key={item.id}>
                      {item.name}
                    </MenuItem>
                  ))}
              </TextField>
              <TextField
                type='number'
                margin='normal'
                defaultValue='0'
                InputProps={{
                  startAdornment: (
                    <InputAdornment position='start'>$</InputAdornment>
                  )
                }}
              />
              <TextField
                type='date'
                margin='normal'
                defaultValue={moment().format('YYYY-MM-DD')}
              />
              <TextField
                type='text'
                label='Description'
                margin='normal'
                fullWidth
              />
            </form>
          )}
        />
      </main>
    );
  }
}

export default withStyles(styles)(Operation) as any;