import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ScrollView, StyleSheet, Dimensions} from 'react-native';
import {Layout, Text} from '@ui-kitten/components';

import {screenStyles} from '../theme/styles';
import {getRoute, setLocation} from '../actions/route';
import Order from '../components/Order';
import {NavigateIcon} from '../theme/icons';

let realTimeDataInterval;
const windowWidth = Dimensions.get('window').width;
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
          <Text>{businessName}</Text>
          <Text>
            {street} {unit ? '#' + unit : null}
          </Text>
          <Text>
            {city}, {state} {zip}
          </Text>
          <NavigateIcon />
        </Layout>
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
          <Layout style={styles.bottomContainer}></Layout>
        </Layout>
      </Layout>
    );
  }
}

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 5,
  },
  bottomContainer: {
    flex: 1,
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
});

const mapDispatchToProps = {
  getRoute,
  setLocation,
};

export default connect(mapStateToProps, mapDispatchToProps)(RouteScreen);
