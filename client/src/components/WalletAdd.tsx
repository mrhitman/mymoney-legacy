import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import Switch from "@material-ui/core/Switch";
import Divider from "@material-ui/core/Divider";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Button } from "@material-ui/core";

export class WalletAdd extends Component {
  render() {
    return (
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
