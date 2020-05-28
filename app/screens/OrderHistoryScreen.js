import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {Layout, Text} from '@ui-kitten/components';
import {screenStyles} from '../theme/styles';
import HistoricalOrder from '../components/organisms/HistoricalOrder';
import {getOrderHistory} from '../actions/route';

export class OrderHistoryScreen extends Component {
  componentDidMount() {
    this.props.getOrderHistory();
  }
  render() {
    return (
      <Layout style={[screenStyles.container, styles.container]} level="1">
        {this.props.historicalOrders.map((order, index) => (
          <HistoricalOrder key={order._id} order={order} index={index} />
        ))}
      </Layout>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    paddingTop: 0,
  },
});

const mapStateToProps = (state) => ({
  historicalOrders: state.route.historicalOrders,
});

const mapDispatchToProps = {
  getOrderHistory,
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderHistoryScreen);
