import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {Layout, Text} from '@ui-kitten/components';
import {Navigation} from 'react-native-navigation';
import {screenStyles} from '../theme/styles';

export class OrderHistoryScreen extends Component {
  render() {
    return (
      <Layout style={screenStyles.container}>
        <Layout style={screenStyles.body}></Layout>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(OrderHistoryScreen);
