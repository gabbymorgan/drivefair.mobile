import React, {Component} from 'react';
import {connect} from 'react-redux';
import Geolocation from '@react-native-community/geolocation';
import {View, Button, Text, TextInput, PermissionsAndroid} from 'react-native';

import {register} from '../actions/session';

export class RegistrationScreen extends Component {
  state = {
    latitude: '',
    longitude: '',
  };

  componentDidMount = async () => {
    await getPermission();
  };


  handleChange({name, value}) {
    this.setState({[name]: value});
  }

  handleSubmit() {
    this.props.register({...this.state});
  }

  render() {
    return (
      <View>
        <TextInput
          placeholder="First Name"
          value={this.state.firstName}
          onChange={e => this.handleChange(e.target)}
        />
        <TextInput
          placeholder="Last Name"
          value={this.state.lastName}
          onChange={e => this.handleChange(e.target)}
        />
        <TextInput
          placeholder="Phone"
          value={this.state.phone}
          onChange={e => this.handleChange(e.target)}
        />
        <TextInput
          placeholder="Email"
          value={this.state.email}
          onChange={e => this.handleChange(e.target)}
        />
        <TextInput
          placeholder="Password"
          value={this.state.password}
          onChange={e => this.handleChange(e.target)}
        />
        <Button onPress={() => this.handleSubmit()} title="Submit" />
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  register,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegistrationScreen);
