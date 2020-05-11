import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';

export class OrderHistoryScreen extends Component {
  render() {
    return (
      <View>
        <Text>OrderHistoryScreen</Text>
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OrderHistoryScreen);
