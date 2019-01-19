import React, { Component } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import { t } from '../i18n';

export class Categories extends Component {
  render() {
    return (
      <>
        <MenuItem value={1} key={1}>
          {t('cash')}
        </MenuItem>
        <MenuItem value={2} key={2}>
          {t('deposits')}
        </MenuItem>
        <MenuItem value={3} key={3}>
          {t('credits')}
        </MenuItem>
        <MenuItem value={4} key={4}>
          {t('other')}
        </MenuItem>
        <MenuItem value={5} key={5}>
          {t('bank')}
        </MenuItem>
        <MenuItem value={6} key={6}>
          {t('contragents')}
        </MenuItem>
        <MenuItem value={7} key={7}>
          {t('property')}
        </MenuItem>
      </>
    );
  }
}

export default Categories;
