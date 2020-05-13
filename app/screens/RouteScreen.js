import React, {Component} from 'react';
import {connect} from 'react-redux';
import {StyleSheet} from 'react-native';
import {Layout, Text} from '@ui-kitten/components';
import Geolocation from '@react-native-community/geolocation';

import {screenStyles} from '../theme/styles';
import {getRoute} from '../actions/route';
import StatusToggle from '../components/StatusToggle';
import Order from '../components/Order';

class RouteScreen extends Component {
  componentDidMount() {
    console.log('mounted', this.props.isLoggedIn);
    this.props.getRoute();
  }

  componentDidUpdate(prevProps) {
    console.log('updated', this.props.isLoggedIn);
    if (!prevProps.isLoggedIn && this.props.isLoggedIn) {
      this.props.getRoute();
    }
  }

  getLocation() {
    Geolocation.getCurrentPosition(
      (success) => {
        this.setState({...success.coords});
      },
      (error) => console.warn(error),
    );
  }

  render() {
    const {businessName, address} = this.props.vendor;
    const {street, unit, city, state, zip} = address ? address : {};
    return (
      <Layout style={screenStyles.container}>
        <Layout style={screenStyles.title}>
          <Text>Route</Text>
        </Layout>
        <Layout>
          <StatusToggle />
        </Layout>
        <Layout>
          <Text>{businessName}</Text>
        </Layout>
        <Layout>
          <Text>
            {street} {unit ? '#' + unit : null}
          </Text>
        </Layout>
        <Layout style={screenStyles.body}>
          {this.props.orders.map((order) => {
            return <Order key={order._id} order={order} />;
          })}
        </Layout>
      </Layout>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
  },
  body: {
    flex: 9,
  },
});

const mapStateToProps = (state) => ({
  vendor: state.route.vendor,
  orders: state.route.orders,
  isLoggedIn: state.session.isLoggedIn,
});

const mapDispatchToProps = {
  getRoute,
};

export default connect(mapStateToProps, mapDispatchToProps)(RouteScreen);
