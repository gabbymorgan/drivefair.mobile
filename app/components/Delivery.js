import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Layout, Text} from '@ui-kitten/components';

export class Delivery extends Component {
  render() {
    return (
      <Layout>
        <Text>{this.props.order.customer.firstName}</Text>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Delivery);
