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
import Categories from './Categories';
import styles, { IStyles } from './Styles';

interface IProps {
  classes: IStyles;
}

export class Operation extends Component<IProps & any> {
  componentDidMount() {
    categoryGetAll()
      .then(this.props.getAllCategories)
      .then(() => walletGetAll())
      .then(this.props.getAllWallets);
  }

  render() {
    return (
      <main>
        <CssBaseline />
        <form className={this.props.classes.form}>
          <TextField
            select
            label='From the account'
            helperText='wallet'
            fullWidth
            margin='normal'
          >
            {this.props.wallets.map((wallet: any) => (
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
            <Categories items={this.props.categories} />
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

export default withStyles(styles)(connect(
  state => state,
  mapDispatchToProps
)(Operation) as any);
