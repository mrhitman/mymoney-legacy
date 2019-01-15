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
import LinearProgress from "@material-ui/core/LinearProgress";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Modal from "@material-ui/core/Modal";
import WalletAdd from "./WalletAdd";

export class WalletList extends Component {
  public state = {
    loading: false,
    show: false,
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
        <Modal open={this.state.show}>
          <WalletAdd />
        </Modal>
        <List>
          {this.state.wallets.map(wallet => (
            <WalletItem {...wallet} />
          ))}
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
