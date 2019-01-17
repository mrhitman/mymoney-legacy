import Categories from "./Categories";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import MenuItem from "@material-ui/core/MenuItem";
import React, { Component } from "react";
import Switch from "@material-ui/core/Switch";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { t } from "../i18n";

interface IProps {
  currencyList: any[];
}

export class WalletAdd extends Component<IProps> {
  render() {
    return (
      <main>
        <CssBaseline />
        <form>
          <TextField type="text" label="Name" />
          <TextField select label="Type" value="cash">
            <Categories />
          </TextField>
          <TextField select label="Currency">
            {this.props.currencyList.map(item => {
              return (
                <MenuItem value={item.id} key={item.id}>
                  {item.name} {item.symbol}
                </MenuItem>
              );
            })}
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
          <div>
            <Button color="primary" variant="outlined">
              Create
            </Button>
            <Button color="secondary" variant="outlined">
              Cancel
            </Button>
          </div>
        </form>
      </main>
    );
  }
}

export default WalletAdd;
