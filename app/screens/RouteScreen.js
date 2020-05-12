import React, {Component} from 'react';
import {connect} from 'react-redux';
import {StyleSheet} from 'react-native';
import {Layout} from '@ui-kitten/components';
import Geolocation from '@react-native-community/geolocation';
import {createOpenLink} from 'react-native-open-maps';

class RouteScreen extends Component {
  getLocation() {
    Geolocation.getCurrentPosition(
      (success) => {
        this.setState({...success.coords});
      },
      (error) => console.warn(error),
    );
  }

  goToYosemite() {
    createOpenLink({end: this.props.destination})();
  }

  render() {
    return (
      <Layout style={styles.container}>
        {this.props.activeOrders.map((activeOrder) => {
          return <Delivery order={activeOrder} />;
        })}
      </Layout>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const mapStateToProps = (state) => ({
  activeOrders: state.orders.activeOrders,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(RouteScreen);
