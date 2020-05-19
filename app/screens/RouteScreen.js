import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Layout, Text, Spinner} from '@ui-kitten/components';

import {screenStyles} from '../theme/styles';
import {getRoute, setLocation} from '../actions/route';
import Order from '../components/organisms/Order';
import {NavigateIcon} from '../theme/icons';
import {navigateToAddress} from '../services/location';

// let realTimeDataInterval;
const windowWidth = Dimensions.get('window').width;
class RouteScreen extends Component {
  componentDidMount = async () => {
    this.getRealTimeData();
    // realTimeDataInterval = setInterval(() => this.getRealTimeData(), 30000);
  };

  // componentWillUnmount() {
  //   clearInterval(realTimeDataInterval);
  // }

  getRealTimeData() {
    this.props.setLocation();
    this.props.getRoute();
  }

  render() {
    const {businessName, address} = this.props.vendor;
    const {street, unit, city, state, zip} = address ? address : {};
    if (this.props.isLoading && !this.props.orders.length) {
      return (
        <Layout style={screenStyles.container}>
          <Spinner size="large" />
        </Layout>
      );
    }
    if (!this.props.orders.length) {
      return (
        <Layout style={screenStyles.container}>
          <Text>Nothing yet!</Text>
        </Layout>
      );
    }
    return (
      <Layout style={screenStyles.container}>
        <TouchableOpacity
          style={styles.vendorInfo}
          onPress={() => navigateToAddress({street, unit, city, state, zip})}>
          <Layout style={styles.address}>
            <Text category="h5" style={styles.vendorInfoText}>
              {businessName}
            </Text>
            <Text category="s2" style={styles.vendorInfoText}>
              {street} {unit ? '#' + unit : null}
            </Text>
            <Text category="s2" style={styles.vendorInfoText}>
              {city}, {state} {zip}
            </Text>
          </Layout>
          <Layout style={styles.navIcon}>
            <NavigateIcon />
          </Layout>
        </TouchableOpacity>
        <Layout style={screenStyles.body}>
          <Layout style={styles.carouselContainer}>
            <ScrollView
              style={styles.carousel}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              pagingEnabled={true}
              decelerationRate={0}
              snapToInterval={windowWidth}>
              {this.props.orders.map((order) => {
                return <Order key={order._id} order={order} />;
              })}
            </ScrollView>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

const styles = StyleSheet.create({
  vendorInfo: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: "nowrap",
    alignItems: "center",
    padding: 10
  },
  vendorInfoText: {
    textAlign: 'center',
  },
  carouselContainer: {
    flex: 6,
  },
  address: {
    maxWidth: '80%',
  },
  navIcon: {
    maxWidth: "10%"
  },
  carousel: {
    display: 'flex',
    flexDirection: 'row',
  },
});

const mapStateToProps = (state) => ({
  vendor: state.route.vendor,
  orders: state.route.orders,
  isLoggedIn: state.session.isLoggedIn,
  isLoading: state.route.isLoading,
});

const mapDispatchToProps = {
  getRoute,
  setLocation,
};

export default connect(mapStateToProps, mapDispatchToProps)(RouteScreen);
