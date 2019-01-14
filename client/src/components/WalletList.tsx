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

export class WalletList extends Component {
  public state = {
    loading: false,
    wallets: []
  };
  componentDidMount() {
    this.setState({ loading: true });
    getWallets()
      .then(response => {
        this.setState({ wallets: response.data });
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  }

  render() {
    return (
      <>
        {this.state.loading && <CircularProgress disableShrink />}
        <List>
          {this.state.wallets.map(wallet => (
            <WalletItem {...wallet} />
          ))}
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
