import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Layout, Text, Button} from '@ui-kitten/components';
import {connect} from 'react-redux';
import {screenStyles} from '../theme/styles';
import {logout} from '../actions/session';
export class MessagesScreen extends Component {
  render() {
    return (
      <Layout style={screenStyles.container}>
        <Layout style={screenStyles.body}>
          <Button onPress={() => this.props.logout()} />
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(MessagesScreen);
