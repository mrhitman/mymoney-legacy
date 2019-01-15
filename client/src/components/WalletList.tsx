import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/AddOutlined";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import MoneyIcon from "@material-ui/icons/AttachMoney";
import React, { Component } from "react";
import { getWallets } from "../api";
import { CircularProgress } from "@material-ui/core";
import * as _ from "lodash";
import LinearProgress from "@material-ui/core/LinearProgress";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import WalletAdd from "./WalletAdd";
import { DialogTitle, DialogContent, Dialog } from "@material-ui/core";

interface IState {
  loading: boolean;
  show: boolean;
  total: any; // { [currency: string]: number };
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
    getWallets()
      .then(response => {
        const wallets = response.data;
        // // const total = _.chain(wallets)
        // //   .groupBy("currency.name")
        // //   .map((value, key) => ({
        // //     [key]: _.sumBy(value, "amount")
        // //   })
        // //   .value();
        // console.log(total);
        this.setState({ wallets });
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  }

  render() {
    const { total, wallets } = this.state;
    return (
      <Paper style={{ width: 700 }}>
        {this.state.loading && <LinearProgress />}
        <Button
          color="primary"
          variant="outlined"
          onClick={() => this.setState({ show: true })}
        >
          <AddIcon />
          Add wallet
        </Button>
        <Dialog
          open={this.state.show}
          onClose={() => this.setState({ show: false })}
        >
          <DialogTitle>Add new wallet</DialogTitle>
          <DialogContent>
            <WalletAdd />
          </DialogContent>
        </Dialog>
        <List>
          {wallets.map((wallet: any) => {
            const currency = wallet.currency.name;
            return <WalletItem {...wallet} />;
          })}
        </List>
      </Paper>
    );
  }
}

const WalletItem = (props: any) => {
  return (
    <ListItem id={props.id}>
      <ListItemIcon>
        <MoneyIcon />
      </ListItemIcon>
      <ListItemText secondary="edit | delete">{props.name}</ListItemText>
      <ListItemSecondaryAction>
        {props.amount} {props.currency.name}
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default WalletList;
