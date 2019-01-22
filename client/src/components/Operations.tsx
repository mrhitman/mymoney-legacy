import { Fab, Tab, Tabs } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import MoneyIcon from '@material-ui/icons/AttachMoney';
import React, { Component } from 'react';
import Operation from './Operation';

export class Operations extends Component {
  state = {
    tab: 0
  };

  getType = (index: number) => {
    switch (index) {
      case 0:
        return 'income';
      case 1:
        return 'outcome';
      case 2:
        return 'transfer';
    }
  };

  render() {
    return (
      <Paper
        square
        style={{
          display: 'block',
          width: 900,
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: 50,
          padding: 15
        }}
      >
        <Tabs
          value={this.state.tab}
          indicatorColor='primary'
          onChange={this.handleChange}
        >
          <Tab label='Income' />
          <Tab label='Outcome' />
          <Tab label='Transfer' />
        </Tabs>
        <Operation type={this.getType(this.state.tab)} />
        <Fab variant='extended' color='secondary' aria-label='Add'>
          <MoneyIcon />
          {this.getType(this.state.tab)}
        </Fab>
      </Paper>
    );
  }

  handleChange = (event: React.ChangeEvent<{}>, value: any) => {
    this.setState({ tab: value });
  };
}

export default Operations;
