import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {Layout, Text} from '@ui-kitten/components';
import { Navigation } from 'react-native-navigation';

export class OrderHistoryScreen extends Component {
  render() {
    return (
      <Layout style={styles.container}>
        <Text>OrderHistoryScreen</Text>
      </Layout>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(OrderHistoryScreen);
