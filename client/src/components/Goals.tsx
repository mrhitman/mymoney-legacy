import React, { Component } from "react";
import { List, ListItem, Paper, withStyles } from "@material-ui/core";

export class Goals extends Component {
  state = {
    goals: [
      {
        id: 1,
        name: "Flat",
        amount: 30000
      }
    ]
  };

  render() {
    const { goals } = this.state;
    const { classes } = this.props as any;
    return (
      <Paper className={classes.paper}>
        <List>
          {goals.map(goal => (
            <ListItem key={goal.id}>{goal.name}</ListItem>
          ))}
        </List>
      </Paper>
    );
  }
}

export default Goals;
