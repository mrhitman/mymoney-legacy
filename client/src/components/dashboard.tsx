import { map } from 'lodash';
import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import { ListGroup, Col, Row, Card } from 'react-bootstrap';
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
        <Row>
          <Col>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Total: 9999 $</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <ListGroup>
              {map(wallets, wallet => (
                <ListGroup.Item key={wallet.id}>
                  {wallet.name} {wallet.amount} {wallet.currency.name}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </>
    );
  }
}

export default Dashboard;
