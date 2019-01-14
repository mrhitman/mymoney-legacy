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
import { TextField, MenuItem, Switch, Divider } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from "@material-ui/core/FormControlLabel";

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
      <Paper style={{ width: 700 }}>
        {this.state.loading && <LinearProgress />}
        <Button color="primary" variant="outlined">
          <AddIcon />
          Add wallet
        </Button>
        <main>
          <CssBaseline />
          <form>
            <TextField type="text" label="Name" />
            <TextField select label="Type" value="cash">
              <MenuItem value="cash">Наличные</MenuItem>
              <MenuItem value="deposits">Депозиты</MenuItem>
              <MenuItem value="credits">Кредиты</MenuItem>
              <MenuItem value="other">Другие</MenuItem>
              <MenuItem value="bank">Счета в банке</MenuItem>
              <MenuItem value="contragents">Контрагенты</MenuItem>
              <MenuItem value="privaty">Имущество</MenuItem>
            </TextField>
            <TextField select label="Currency" value="usd">
              <MenuItem value="usd">USD</MenuItem>
              <MenuItem value="uah">UAH</MenuItem>
              <MenuItem value="rub">RUB</MenuItem>
            </TextField>
            <Divider />
            <div>
              <FormControlLabel
                control={<Switch color="primary" />}
                label="Add to budget"
              />
              <FormControlLabel
                control={<Switch color="primary" />}
                label="Show on panel"
              />
              <FormControlLabel
                control={<Switch color="primary" />}
                label="Take account of Balance"
              />
            </div>
            <Divider />
          </form>
        </main>
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
