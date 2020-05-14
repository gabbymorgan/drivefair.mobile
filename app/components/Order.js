import React, {Component} from 'react';
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {Layout, Text} from '@ui-kitten/components';
import {createOpenLink} from 'react-native-open-maps';

import {NavigateIcon} from '../theme/icons';

export class Order extends Component {
  goToDestination(addressString) {
    console.log(addressString);
    createOpenLink({end: addressString})();
  }

  render() {
    const {order} = this.props;
    const {address, customer} = order;
    const {firstName, lastName} = customer;
    const {street, unit, city, state, zip} = address ? address : {};
    const addressString = `${street} ${
      unit ? '#' + unit : ''
    } ${city}, ${state} ${zip}`;
    return (
      <Layout style={styles.container} level="2">
        <Layout style={styles.title} level="3">
          <Text category="h1">
            {firstName} {lastName[0]}
          </Text>
          <Text>{addressString}</Text>
          <TouchableOpacity
            onPress={() => this.goToDestination(addressString)}
            style={styles.icon}>
            <NavigateIcon color="white" />
          </TouchableOpacity>
        </Layout>
        <Layout style={styles.orderItemList} level="3">
          <ScrollView>
            {[...order.orderItems, ...order.orderItems].map((orderItem) => (
              <Layout level="4" style={styles.orderItem}>
                <Layout level="4" style={styles.orderItemTitle}>
                  <Text>{orderItem.menuItem.name}</Text>
                </Layout>
                {orderItem.modifications.map((modification) => (
                  <Layout level="5" style={styles.modification}>
                    <Text>{modification.name}</Text>
                    {modification.options.map((option) => (
                      <Layout level="5" style={styles.option}>
                        <Text>{option.name}</Text>
                      </Layout>
                    ))}
                  </Layout>
                ))}
              </Layout>
            ))}
          </ScrollView>
          
        </Layout>
      </Layout>
    );
  }
}

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: windowWidth * 0.05,
    padding: 20,
    width: windowWidth * 0.9,
  },
  title: {
    textAlign: 'center',
    padding: 10,
    flex: 1,
  },
  orderItemList: {
    flex: 4,
  },
  orderItem: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    padding: 20,
  },
  orderItemTitle: {
    flex: 1,
  },
  modification: {
    padding: 5,
  },
  option: {},
  icon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Order);
