import { inject, observer } from 'mobx-react';
import React from 'react';
import { Redirect } from 'react-router';
import { InjectedProps } from '../types';

@inject('store')
@observer
class Layout extends React.Component {
  private get injected() {
    return this.props as InjectedProps;
  }

  protected fetchData() {
    const { fetchProfile } = this.injected.store;
  }

  public render() {
    const { isLoggined } = this.injected.store;
    if (!isLoggined) {
      <Redirect to='/signin' />
    }
    return (
      <>
        <div>{this.props.children}</div>
      </>
    );
  }
}

export default Layout;
