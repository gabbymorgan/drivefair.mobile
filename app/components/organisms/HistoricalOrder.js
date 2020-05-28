import React from 'react';
import {StyleSheet, View} from 'react-native';
import moment from 'moment';
import {Layout, Text} from '@ui-kitten/components';
import {formatPriceFromFloatString} from '../..//services/formatting';
import {RightArrow} from '../../theme/icons';

const HistoricalOrder = (props) => {
  const {customer, vendor, tip, actualDeliveryTime} = props.order;
  return (
    <Layout style={styles.container} level={props.index % 2 === 0 ? '1' : '2'}>
      <View style={styles.row}>
        <Text category="s2" style={styles.text}>
          {moment(actualDeliveryTime).format('MM/DD h:mma')}
        </Text>
      </View>
      <View style={styles.row}>
        <View style={styles.column}>
          <Text category="s1" style={styles.text}>
            {customer.firstName} {customer ? customer.lastName[0] : ''}
          </Text>
        </View>
        <View style={styles.column}>
          <Text category="s1" style={styles.text}>
            {formatPriceFromFloatString(tip)}
          </Text>
        </View>
        <View style={styles.column}>
          <Text category="s1">{vendor.businessName}</Text>
        </View>
      </View>
    </Layout>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  column: {
    width: '33%',
    justifyContent: 'center',
  },
  spacer: {
    width: '12%',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
  },
});

export default HistoricalOrder;
