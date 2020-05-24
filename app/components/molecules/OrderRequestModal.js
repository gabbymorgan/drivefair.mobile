import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {Navigation} from 'react-native-navigation';
import {Button, Layout, Spinner, Text} from '@ui-kitten/components';

import {screenStyles} from '../../theme/styles';
import ProtectedButton from '../atoms/ProtectedButton';
import {driverAcceptOrder} from '../../actions/route';
import {DownArrow, DownRightArrow, RightDownArrow} from '../../theme/icons';
import Sound from 'react-native-sound';

let notificationSound;
class OrderRequestModal extends Component {
  componentDidMount() {
    notificationSound = new Sound(
      'to_the_point.mp3',
      Sound.MAIN_BUNDLE,
      (error) => {
        if (error) {
          console.log('failed to load the sound', error);
          return;
        }
        notificationSound.setNumberOfLoops(-1);
        notificationSound.setVolume(0.5);
        notificationSound.play();
      },
    );
    if (Date.now() < this.props.timeReceived + 10000) {
      setTimeout(() => {
        this.dismissModal();
      }, Date.now() - this.props.timeReceived + 10000);
    } else {
      this.dismissModal();
    }
  }

  componentWillUnmount() {
    notificationSound.stop();
  }

  dismissModal() {
    Navigation.dismissModal(this.props.componentId);
  }

  render() {
    return (
      <Layout style={container}>
        <NotificationText {...this.props} />
        <ReplyButtons
          {...this.props}
          dismissModal={this.dismissModal.bind(this)}
        />
      </Layout>
    );
  }
}

const NotificationText = (props) => {
  const {
    messageType,
    businessName,
    businessAddress,
    customerName,
    customerAddress,
  } = props.modalData;
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
  const {messageType, orderId} = props.modalData;
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
            style={styles.buttonDouble}
            status={'danger'}
            initialContent="Nope"
            pressProgressContent={<Spinner size="small" />}
            pressCompletedContent="Good!"
            action={props.dismissModal}
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
    paddingVertical: 20,
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
  modalData: state.messages.modalData,
  timeReceived: state.messages.timeReceived,
});

const mapDispatchToProps = {
  driverAcceptOrder,
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderRequestModal);
