import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Layout, Text, Button} from '@ui-kitten/components';
import {Navigation} from 'react-native-navigation';
import messaging from '@react-native-firebase/messaging';
import {connect} from 'react-redux';
import {screenStyles} from '../theme/styles';
import {logout} from '../actions/session';
import {receivePushNotification} from '../actions/messages';
import Axios from 'axios';
import {modalStack} from '../navigation';
import Toast from '../components/Toast';

export class MessagesScreen extends Component {
  componentDidMount = async () => {
    const settings = await messaging().requestPermission();
    if (settings) {
      messaging().onMessage((message) => {
        this.props.receivePushNotification(message);
      });
      const token = await messaging().getToken();
      await Axios.post('/drivers/addDeviceToken', {
        deviceToken: token,
      });
    }
  };

  sendNotification() {
    Axios.post('/drivers/sendMessage', {
      driverId: this.props.profile._id,
      title: 'test',
      body: "okay it's a test",
    });
  }

  render() {
    return (
      <Layout style={screenStyles.container}>
        <Layout style={screenStyles.body}>
          <Button onPress={() => this.props.logout()}>Logout</Button>
          <Button onPress={() => this.sendNotification()}>Test Message</Button>
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.session.profile,
});

const mapDispatchToProps = {
  logout,
  receivePushNotification,
};

export default connect(mapStateToProps, mapDispatchToProps)(MessagesScreen);
