import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Layout, Text, Button} from '@ui-kitten/components';
import {connect} from 'react-redux';
import {screenStyles} from '../theme/styles';
import {logout} from '../actions/session';
import Axios from 'axios';
import messaging from '@react-native-firebase/messaging';
import {Navigation} from 'react-native-navigation';
import {modalStack} from '../navigation';
import Toast from '../components/Toast';

export class MessagesScreen extends Component {
  componentDidMount = async () => {
    const settings = await messaging().requestPermission();
    if (settings) {
      messaging().onMessage((message) => {
        Navigation.showModal(modalStack);
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
};

export default connect(mapStateToProps, mapDispatchToProps)(MessagesScreen);
