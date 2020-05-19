import React from 'react';
import {StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {Navigation} from 'react-native-navigation';
import {Button, Layout, Spinner, Text} from '@ui-kitten/components';

import {screenStyles} from '../../theme/styles';
import ProtectedButton from '../atoms/ProtectedButton';
import {driverAcceptOrder} from '../../actions/route';
import {DownArrow, DownRightArrow, RightDownArrow} from '../../theme/icons';

const OrderRequestModal = function (props) {
  dismissModal = () => {
    Navigation.dismissModal(props.componentId);
  };
  return (
    <Layout style={container}>
      <NotificationText {...props} />
      <ReplyButtons {...props} dismissModal={dismissModal.bind(this)} />
    </Layout>
  );
};

const NotificationText = (props) => {
  const {
    messageType,
    businessName,
    businessAddress,
    customerName,
    customerAddress,
  } = props.message.data;
  switch (messageType) {
    case 'REQUEST_DRIVER':
      return (
        <Layout style={styles.infoContainer}>
          <Layout style={styles.infoGroup}>
            <Text category="h4" style={styles.infoText}>
              {businessName}
            </Text>
            <Text category="s2" style={styles.infoText}>
              {businessAddress}
            </Text>
          </Layout>
          <Layout style={styles.infoGroup}>
            <DownArrow />
            <DownRightArrow />
            <RightDownArrow />
            <DownArrow />
          </Layout>
          <Layout style={styles.infoGroup}>
            <Text category="h4" style={styles.infoText}>
              {customerName}
            </Text>
            <Text category="s2" style={styles.infoText}>
              {customerAddress}
            </Text>
          </Layout>
        </Layout>
      );
    default:
      return null;
  }
};

const ReplyButtons = (props) => {
  const {messageType, orderId} = props.message.data;
  const acceptOrder = () => {
    props.driverAcceptOrder(orderId);
    props.dismissModal();
  };
  switch (messageType) {
    case 'REQUEST_DRIVER':
      return (
        <Layout style={styles.buttonGroup}>
          <Button style={styles.buttonDouble} onPress={() => acceptOrder()}>
            Sure
          </Button>
          <ProtectedButton
            {...props}
            initialContent="Nope"
            pressProgressContent={<Spinner size="small" />}
            pressCompletedContent="Good!"
            action={dismissModal}
          />
        </Layout>
      );
    default:
      return null;
  }
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 0,
  },
  infoContainer: {
    flexWrap: 'nowrap',
    alignItems: 'center',
    padding: 10,
  },
  infoGroup: {
    paddingVertical: 20
  },
  infoText: {
    textAlign: 'center',
  },
  buttonGroup: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 20,
  },
  buttonDouble: {
    width: '40%',
    marginHorizontal: '5%',
  },
  buttonSingle: {},
});

const container = StyleSheet.compose(screenStyles.container, styles.container);

const mapStateToProps = (state) => ({
  message: state.messages.currentMessage,
});

const mapDispatchToProps = {
  driverAcceptOrder,
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderRequestModal);
