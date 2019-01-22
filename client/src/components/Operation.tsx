import CssBaseline from '@material-ui/core/CssBaseline';
import InputAdornment from '@material-ui/core/InputAdornment';
import MenuItem from '@material-ui/core/MenuItem';
import withStyles from '@material-ui/core/styles/withStyles';
import TextField from '@material-ui/core/TextField';
import moment from 'moment';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { getAll as getAllCategories } from '../actions/category';
import { getAll as getAllWallets } from '../actions/wallet';
import { categoryGetAll, walletGetAll } from '../api';
import { WalletProps } from '../reducers/wallet';
import styles, { IStyles } from './Styles';
import { CategoryProps } from '../reducers/category';
import { Formik } from 'formik';

interface IProps {
  classes: IStyles;
  type: string;
}
interface IDispatchProps {
  categories: CategoryProps[];
  wallets: WalletProps[];
  getAllCategories: () => void;
  getAllWallets: () => void;
}

export class Operation extends Component<IProps & IDispatchProps & any> {
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
                {wallets.map((wallet: WalletProps) => (
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
                  .filter((item: CategoryProps) => item.type === type)
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

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      getAllCategories,
      getAllWallets
    },
    dispatch
  );

export default withStyles(styles)(
  connect(
    state => state,
    mapDispatchToProps
  )(Operation)
) as any;
