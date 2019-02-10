import { map } from 'lodash';
import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import { Col, ListGroup, Row } from 'react-bootstrap';
import { InjectedProps } from '../../types';
import CurrencyAdd from './currency-add';

@inject('store')
@observer
export class Currencies extends Component {
  protected get injected() {
    return this.props as InjectedProps;
  }

  protected fetchData() {
    const { fetchAll } = this.injected.store;
    return fetchAll('currencies');
  }

  public componentDidMount() {
    return this.fetchData();
  }

  public render() {
    const { currencies } = this.injected.store;
    return (
      <>
        <Row>
          <Col>
            <CurrencyAdd />
          </Col>
          <Col>
            <ListGroup>
              {map(currencies, currency => (
                <ListGroup.Item key={currency.id}>
                  {currency.name} {currency.description} {currency.symbol}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </>
    );
  }
}

export default Currencies;
