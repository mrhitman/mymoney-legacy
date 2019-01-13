import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MoneyIcon from "@material-ui/icons/AttachMoney";
import DeleteIcon from "@material-ui/icons/Delete";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

export class WalletList extends Component {
  public state = {
    wallets: [
      { id: 1, name: "some wallet 1", currency: "USD", amount: 10000 },
      { id: 2, name: "some wallet 2", currency: "USD", amount: 10000 },
      { id: 3, name: "some wallet 3", currency: "USD", amount: 10000 },
      { id: 4, name: "some wallet 4", currency: "USD", amount: 10000 }
    ]
  };
  render() {
    return (
      <List>
        {this.state.wallets.map(wallet => (
          <WalletItem {...wallet} />
        ))}
      </List>
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
        {props.amount} {props.currency}
      </ListItemSecondaryAction>
      <div />
    </ListItem>
  );
};

export default WalletList;
