import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {Layout, Text} from '@ui-kitten/components';
import {createOpenLink} from 'react-native-open-maps';
import { TouchableWithoutFeedback } from '@ui-kitten/components/devsupport';

export class Order extends Component {
  goToDestination(addressString) {
    console.log(addressString)
    createOpenLink({end: addressString})();
  }

  render() {
    const {street, unit, city, state, zip} = this.props.order.address[0];
    const addressString = `${street} ${
      unit ? '#' + unit : ''
    } ${city}, ${state} ${zip}`;
    return (
      <TouchableWithoutFeedback
        style={styles.container}
        onPress={() => this.goToDestination(addressString)}>
        <Layout>
          <Text>{this.props.order.customer.firstName}</Text>
        </Layout>
        <Layout>
          <Text>{addressString}</Text>
        </Layout>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderColor: "white",
    borderStyle: "solid",
    borderWidth: 1,
    margin: "5%",
    padding: "5%"
  }
});

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Order);
