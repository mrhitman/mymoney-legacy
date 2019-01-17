import * as _ from "lodash";
import AddIcon from "@material-ui/icons/AddOutlined";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import LinearProgress from "@material-ui/core/LinearProgress";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import MoneyIcon from "@material-ui/icons/AttachMoney";
import Paper from "@material-ui/core/Paper";
import React, { Component } from "react";
import WalletAdd from "./WalletAdd";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import { getAll } from "../actions/currency";
import { getCurrencyList, getWallets } from "../api";
import Operation from "./Operation";
import { Tab, Tabs, Fab } from "@material-ui/core";

interface IState {
  loading: boolean;
  show: boolean;
  total: { [currency: string]: number };
  wallets: any[];
  tab: number;
}

export class WalletList extends Component<any, IState> {
  public state = {
    loading: false,
    total: {},
    show: false,
    wallets: [],
    tab: 0
  };
  componentDidMount() {
    this.setState({ loading: true });
    getCurrencyList()
      .then(this.props.getAll)
      .then(() => getWallets())
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
            display: "block",
            width: 900,
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 50,
            padding: 15
          }}
        >
          {this.state.loading && <LinearProgress />}
          <Button
            color="primary"
            variant="fab"
            onClick={() => this.setState({ show: true })}
          >
            <AddIcon />
          </Button>
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
              return <WalletItem {...wallet} />;
            })}
          </List>
        </Paper>
        <Paper
          square
          style={{
            display: "block",
            width: 900,
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: 50,
            padding: 15
          }}
        >
          <Tabs
            value={this.state.tab}
            indicatorColor="primary"
            onChange={this.handleChange}
          >
            <Tab label="Income" />
            <Tab label="Outcome" />
            <Tab label="Transfer" />
          </Tabs>
          <Operation />
          <Fab variant="extended" color="secondary" aria-label="Add">
            <MoneyIcon />
            {this.state.tab === 0 && "Income"}
            {this.state.tab === 1 && "Outcome"}
            {this.state.tab === 2 && "Transfer"}
          </Fab>
        </Paper>
      </>
    );
  }

  handleChange = (event: React.ChangeEvent<{}>, value: any) => {
    this.setState({ tab: value });
  };
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
