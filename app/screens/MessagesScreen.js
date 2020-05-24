import React, {Component} from 'react';
import {Layout} from '@ui-kitten/components';
import messaging from '@react-native-firebase/messaging';
import {connect} from 'react-redux';
import {screenStyles} from '../theme/styles';
import {receivePushNotification} from '../actions/messages';
import Axios from 'axios';
import {Navigation} from 'react-native-navigation';
import {modalStack} from '../navigation';

export class MessagesScreen extends Component {
  componentDidMount = async () => {
    const messagingAllowed = await messaging().requestPermission();
    if (messagingAllowed) {
      messaging().onMessage((message) => {
        this.props.receivePushNotification(message);
      });
      // messaging().onNotificationOpenedApp((message) => {
      //   if (message.data.openModal) {
      //     Navigation.showModal(modalStack);
      //   }
      // });
      messaging().setBackgroundMessageHandler(async (message) => {
        this.props.receivePushNotification(message);
      });
      const token = await messaging().getToken();
      console.log(token);
      await Axios.post('/drivers/addDeviceToken', {
        deviceToken: token,
      });
    }
  };

  render() {
    return (
      <Layout style={screenStyles.container}>
        <Layout style={screenStyles.body}></Layout>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.session.profile,
});

const mapDispatchToProps = {
  receivePushNotification,
};

export default connect(mapStateToProps, mapDispatchToProps)(MessagesScreen);
