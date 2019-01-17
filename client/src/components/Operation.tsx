import Categories from "./Categories";
import InputAdornment from "@material-ui/core/InputAdornment";
import moment from "moment";
import React, { Component } from "react";
import styles, { IStyles } from "./styles";
import {
  CssBaseline,
  MenuItem,
  TextField,
  withStyles
} from "@material-ui/core";

interface IProps {
  classes: IStyles;
}

export class Operation extends Component<IProps> {
  render() {
    return (
      <main>
        <CssBaseline />
        <form className={this.props.classes.form}>
          <TextField
            select
            label="From the account"
            helperText="wallet"
            fullWidth
            margin="normal"
          >
            <MenuItem value={1}>Some wallet </MenuItem>
            <MenuItem value={2}>Some wallet 2</MenuItem>
          </TextField>
          <TextField
            select
            label="Category"
            helperText="not selected"
            fullWidth
            margin="normal"
          >
            <Categories />
          </TextField>
          <TextField
            type="number"
            margin="normal"
            defaultValue="0"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              )
            }}
          />
          <TextField
            type="date"
            margin="normal"
            defaultValue={moment().format("YYYY-MM-DD")}
          />
          <TextField
            type="text"
            label="Description"
            margin="normal"
            fullWidth
          />
        </form>
      </main>
    );
  }
}

export default withStyles(styles)(Operation as any);
