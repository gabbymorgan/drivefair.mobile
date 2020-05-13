import React, {Component} from 'react';
import {connect} from 'react-redux';
import {StyleSheet} from 'react-native';
import {Layout, Text} from '@ui-kitten/components';
import Geolocation from '@react-native-community/geolocation';

import {screenStyles} from '../theme/styles';
import {getRoute} from '../actions/route';
import StatusToggle from '../components/StatusToggle';

class RouteScreen extends Component {
  componentDidMount() {
    this.props.getRoute();
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
    return (
      <Layout style={screenStyles.container}>
        <Layout style={screenStyles.title}>
          <Text>Route</Text>
          <StatusToggle />
        </Layout>
        <Layout style={screenStyles.body}>
          {this.props.orders.map((activeOrder) => {
            return <Delivery order={activeOrder} />;
          })}
        </Layout>
      </Layout>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    flex: 1,
    flexDirection: "row",
    width: "100%"
  },
  body: {
    flex: 9,
  },
});

const mapStateToProps = (state) => ({
  orders: state.route.orders,
});

const mapDispatchToProps = {
  getRoute,
};

export default connect(mapStateToProps, mapDispatchToProps)(RouteScreen);
