import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '@material-ui/core/Fab';
import LinearProgress from '@material-ui/core/LinearProgress';
import List from '@material-ui/core/List';
import Paper from '@material-ui/core/Paper';
import AddIcon from '@material-ui/icons/AddOutlined';
import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import { Store } from '../store';
import Operations from './Operations';
import Wallet from './Wallet';
import WalletAdd from './WalletAdd';

@observer
@inject('store')
export class WalletList extends Component<{ store: Store }> {
  public state = {
    loading: false,
    total: {},
    show: false,
    wallets: []
  };

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
              <WalletAdd currencyList={this.props.store.currencies} />
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

export default WalletList;
