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
    return (
      <ListItem id={this.props.id}>
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
          {this.props.name}
        </ListItemText>
        <ListItemSecondaryAction>
          {this.props.amount} {this.props.currency.name}
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
