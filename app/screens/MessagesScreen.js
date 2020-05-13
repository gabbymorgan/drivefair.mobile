import React, {Component} from 'react';
import { StyleSheet } from "react-native";
import {Layout, Text} from '@ui-kitten/components';
import {connect} from 'react-redux';
import {screenStyles} from "../theme/styles"

export class MessagesScreen extends Component {
  render() {
    return (
      <Layout style={screenStyles.container}>
        <Layout style={screenStyles.title}>
          <Text>Messages</Text>
        </Layout>
        <Layout style={screenStyles.body}></Layout>
      </Layout>
    );
  }
}



const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MessagesScreen);
