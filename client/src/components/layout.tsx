import { inject, observer } from 'mobx-react';
import React from 'react';
import { Redirect } from 'react-router';
import { Store } from '../store';

@observer
@inject('store')
class Layout extends React.Component<{ store?: Store }> {
  public render() {
    return (
      <>
        <Redirect to='/signin' />
        <div>{this.props.children}</div>
      </>
    );
  }
}

export default Layout;
