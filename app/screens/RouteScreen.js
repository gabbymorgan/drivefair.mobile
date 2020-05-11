import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text, Button} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import {createOpenLink} from 'react-native-open-maps';

class RouteScreen extends Component {


  getLocation() {
    Geolocation.getCurrentPosition(
      success => {
        this.setState({...success.coords});
      },
      error => console.warn(error),
    );
  }

  goToYosemite() {
    createOpenLink({end: this.props.destination})();
  }

  render() {
    return (
      <View>
        {this.props.orders.forEach(order => {
          return <Delivery order={order} />;
        })}
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RouteScreen);
