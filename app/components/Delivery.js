import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Layout, Text} from '@ui-kitten/components';
import {createOpenLink} from 'react-native-open-maps';

import {getRoute} from "../actions/route";

export class Delivery extends Component {
  toToDestination() {
    createOpenLink({end: this.props.order.address})();
  }

  componentDidMount() {
    this.props.getRoute();
  }

  render() {
    return (
      <Layout onPress={() => goToDestination()}>
        <Text>{this.props.order.customer.firstName}</Text>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  getRoute
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Delivery);
