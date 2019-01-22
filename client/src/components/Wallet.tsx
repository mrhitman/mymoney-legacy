import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import MoneyIcon from '@material-ui/icons/AttachMoney';
import React, { Component } from 'react';
import { walletDelete } from '../api';
import { Link } from '@material-ui/core';

export class Wallet extends Component<any> {
  render() {
    const { currency, id, name, amount } = this.props;
    return (
      <ListItem id={id}>
        <ListItemIcon>
          <MoneyIcon />
        </ListItemIcon>
        <ListItemText
          secondary={
            <>
              <Link>edit</Link>|<Link onClick={this.handleDelete}>delete</Link>
            </>
          }
        >
          {name}
        </ListItemText>
        <ListItemSecondaryAction>
          {amount} {currency.name}
        </ListItemSecondaryAction>
      </ListItem>
    );
  }

  handleDelete = () => {
    const { id, name } = this.props;
    if (window.confirm(`Are you sure you wish to delete '${name}' wallet?`)) {
      walletDelete(id).then(console.log);
    }
  };
}

export default Wallet;
