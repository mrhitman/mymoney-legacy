import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '@material-ui/core/Fab';
import LinearProgress from '@material-ui/core/LinearProgress';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import AddIcon from '@material-ui/icons/AddOutlined';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { getAll } from '../actions/currency';
import { currencyGetAll, walletGetAll } from '../api';
import Operations from './Operations';
import Wallet from './Wallet';
import WalletAdd from './WalletAdd';

interface IState {
  loading: boolean;
  show: boolean;
  total: { [currency: string]: number };
  wallets: any[];
}

export class WalletList extends Component<any, IState> {
  public state = {
    loading: false,
    total: {},
    show: false,
    wallets: []
  };

  componentDidMount() {
    this.setState({ loading: true });
    currencyGetAll()
      .then(this.props.getAll)
      .then(() => walletGetAll())
      .then(response => {
        const wallets = response.data;
        this.setState({ wallets });
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  }

  render() {
    const { total, wallets } = this.state;
    return (
      <>
        <Paper
          style={{
            display: 'block',
            width: 900,
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: 50,
            padding: 15
          }}
        >
          {this.state.loading && <LinearProgress />}
          <Fab color='primary' onClick={() => this.setState({ show: true })}>
            <AddIcon />
          </Fab>
          <Dialog
            open={this.state.show}
            onClose={() => this.setState({ show: false })}
          >
            <DialogTitle>Add new wallet</DialogTitle>
            <DialogContent>
              <WalletAdd currencyList={this.props.currencyList} />
            </DialogContent>
          </Dialog>
          <List>
            {wallets.map((wallet: any) => {
              const currency = wallet.currency.name;
              return <Wallet {...wallet} key={wallet.id} />;
            })}
          </List>
        </Paper>
        <Operations />
      </>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      getAll
    },
    dispatch
  );

export default connect(
  state => state,
  mapDispatchToProps
)(WalletList);
