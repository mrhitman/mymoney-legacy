import { Collapse, Drawer, List } from '@material-ui/core';
import MoneyIcon from '@material-ui/icons/AttachMoney';
import CardTravelIcon from '@material-ui/icons/CardTravel';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import React, { Component } from 'react';
import { t } from '../../i18n';
import BillIcon from './BillIcon';
import MenuItem from './MenuItem';
import WalletIcon from './WalletIcon';

export class LeftMenu extends Component {
  state = { open: false };

  render() {
    return (
      <Drawer
        variant='permanent'
        anchor='left'
        PaperProps={{ style: { width: 240, marginTop: 65 } }}
      >
        <List>
          <MenuItem key='wallets' to='/wallets' icon={<WalletIcon />}>
            {t('wallets')}
          </MenuItem>
          <MenuItem key='analize' to='#' icon={<EqualizerIcon />}>
            {t('analize')}
          </MenuItem>
          <MenuItem key='bills' to='#' icon={<BillIcon />}>
            {t('bills')}
          </MenuItem>
          <MenuItem key='budget' to='#' icon={<CardTravelIcon />}>
            {t('budget')}
          </MenuItem>
          <MenuItem key='goals' to='#' icon={<DoneAllIcon />}>
            {t('goals')}
          </MenuItem>
          <MenuItem
            key='other'
            icon={this.state.open ? <ExpandLess /> : <ExpandMore />}
            onClick={() => this.setState({ open: !this.state.open })}
          >
            {t('other')}
          </MenuItem>
          <List>
            <Collapse in={this.state.open} timeout='auto' unmountOnExit>
              <MenuItem
                key='currency_list'
                icon={<MoneyIcon />}
                style={{ marginLeft: 8 }}
              >
                {t('Currency list')}
              </MenuItem>
            </Collapse>
          </List>
        </List>
      </Drawer>
    );
  }
}

export default LeftMenu;
