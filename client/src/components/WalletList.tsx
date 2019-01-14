import DeleteIcon from "@material-ui/icons/Delete";
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

interface IState {
  loading: boolean;
  total: any; // { [currency: string]: number };
  wallets: any[];
}

export class WalletList extends Component<any, IState> {
  public state = {
    loading: false,
    total: {},
    wallets: []
  };
  componentDidMount() {
    this.setState({ loading: true });
    getWallets()
      .then(response => {
        const wallets = response.data;
        const total = _.chain(wallets)
          .groupBy("currency.name")
          .map((value, key) => ({
            [key]: _.sumBy(value, "amount")
          })
          .value();
        console.log(total);
        this.setState({ wallets, total });
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  }

  render() {
    const { total, wallets } = this.state;
    return (
      <>
        {this.state.loading && <CircularProgress disableShrink />}
        <List>
          {wallets.map((wallet: any) => {
            const currency = wallet.currency.name;
            return <WalletItem {...wallet} />;
          })}
        </List>
      </>
    );
  }
}

const WalletItem = (props: any) => {
  return (
    <ListItem id={props.id} style={{ width: 400 }}>
      <ListItemIcon>
        <MoneyIcon />
      </ListItemIcon>
      <ListItemText secondary="edit | delete">{props.name}</ListItemText>
      <ListItemSecondaryAction>
        {props.amount} {props.currency.name}
      </ListItemSecondaryAction>
      <div />
    </ListItem>
  );
};

export default WalletList;
