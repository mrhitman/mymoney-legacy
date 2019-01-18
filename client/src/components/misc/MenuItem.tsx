import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import React from 'react';
import { Link } from 'react-router-dom';

export interface MenuItemProps {
  key: string;
  icon: React.ReactElement<any>;
  to?: string;
}

const MenuItem = (props: MenuItemProps & React.ComponentProps<any>) => {
  const content = (
    <ListItem button key={props.key} {...props}>
      <ListItemIcon>{props.icon}</ListItemIcon>
      <ListItemText>{props.children}</ListItemText>
    </ListItem>
  );
  return !props.to ? (
    content
  ) : (
    <Link to={props.to} style={{ textDecoration: 'none' }}>
      {content}
    </Link>
  );
};

export default MenuItem;
