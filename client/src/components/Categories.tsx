import React, { Component } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import { t } from '../i18n';

export class Categories extends Component<any> {
  render() {
    return (
      <>
        {this.props.items.map((item: any) => (
          <MenuItem value={item.id} key={item.id}>
            {item.name}
          </MenuItem>
        ))}
      </>
    );
  }
}

export default Categories;
