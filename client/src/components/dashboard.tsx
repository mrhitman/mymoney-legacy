import { map } from 'lodash';
import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import { ListGroup } from 'react-bootstrap';
import { InjectedProps } from '../types';

@inject('store')
@observer
export class Dashboard extends Component {
  protected get injected() {
    return this.props as InjectedProps;
  }

  public fetchData() {
    const { fetchAll } = this.injected.store;
    return fetchAll('wallets').then(() => fetchAll('currencies'));
  }

  public componentDidMount() {
    return this.fetchData();
  }

  public render() {
    const { wallets } = this.injected.store;
    return (
      <>
        <ListGroup>
          {map(wallets, wallet => (
            <ListGroup.Item key={wallet.id}>
              {wallet.name} {wallet.amount} {wallet.currency.name}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </>
    );
  }
}

export default Dashboard;
