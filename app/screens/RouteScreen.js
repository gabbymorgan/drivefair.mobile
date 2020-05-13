import React, {Component} from 'react';
import {connect} from 'react-redux';
import {StyleSheet} from 'react-native';
import {Layout, Text} from '@ui-kitten/components';
import Geolocation from '@react-native-community/geolocation';

import {screenStyles} from '../theme/styles';
import {getRoute, setLocation} from '../actions/route';
import StatusToggle from '../components/StatusToggle';
import Order from '../components/Order';
import {getLocation} from '../services/location';

let realTimeDataInterval;
class RouteScreen extends Component {
  componentDidMount = async () => {
    this.getRealTimeData();
    realTimeDataInterval = setInterval(() => {
      this.getRealTimeData();
    }, 5000);
  };

  componentWillUnmount() {
    clearInterval(realTimeDataInterval);
  }

  getRealTimeData() {
    this.props.setLocation();
    this.props.getRoute();
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
  setLocation,
};

export default connect(mapStateToProps, mapDispatchToProps)(RouteScreen);
