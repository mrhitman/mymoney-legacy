import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import { InjectedProps } from '../types';
import { ListGroup } from 'react-bootstrap';
import { map } from 'lodash';

@inject('store')
@observer
export class Dashboard extends Component {
  protected get injected() {
    return this.props as InjectedProps;
  }

  public fetchData() {
    const { fetchAll } = this.injected.store;
    return fetchAll('wallet')
      .then(() => fetchAll('currency'));
  }

  public componentDidMount() {
    return this.fetchData();
  }

  public render() {
    const { wallets, currencies } = this.injected.store;
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
