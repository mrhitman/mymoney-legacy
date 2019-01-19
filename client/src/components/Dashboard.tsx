import React, { Component } from 'react';
import { Paper, Typography, CssBaseline } from '@material-ui/core';

export class Dashboard extends Component {
  render() {
    return (
      <div style={{ marginLeft: 240, marginTop: 20}}>
        <CssBaseline />
        <Paper>
          <Typography>Total: 9999</Typography>
        </Paper>
      </div>
    );
  }
}

export default Dashboard;
