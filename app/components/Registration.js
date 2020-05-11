import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, View, Input} from '@ui-kitten/components';

import {register} from '../actions/session';

export class Registration extends Component {
  state = {};

  handleChange(name, value) {
    this.setState({[name]: value});
  }

  handleSubmit() {
    console.log(this.state);
    this.props.register({...this.state});
  }

  render() {
    return (
      <View>
        <Input
          placeholder="First Name"
          name="firstName"
          value={this.state.firstName}
          textContentType="givenName"
          onChangeText={(text) => this.handleChange('firstName', text)}
        />
        <Input
          placeholder="Last Name"
          name="lastName"
          value={this.state.lastName}
          textContentType="familyName"
          onChangeText={(text) => this.handleChange('lastName', text)}
        />
        <Input
          placeholder="Phone"
          name="phoneNumber"
          value={this.state.phone}
          textContentType="telephoneNumber"
          onChangeText={(text) => this.handleChange('phoneNumber', text)}
        />
        <Input
          placeholder="Email"
          name="email"
          value={this.state.email}
          autoCapitalize="none"
          autoCapitalization
          autoCapitalization
          textContentType="emailAddress"
          onChangeText={(text) => this.handleChange('email', text)}
        />
        <Input
          placeholder="Password"
          name="password"
          value={this.state.password}
          autoCapitalize="none"
          secureTextEntry={true}
          textContentType="password"
          onChangeText={(text) => this.handleChange('password', text)}
        />
        <Input
          placeholder="Confirm Password"
          name="confirmPassword"
          value={this.state.password}
          autoCapitalize="none"
          secureTextEntry={true}
          textContentType="password"
          onChangeText={(text) => this.handleChange('confirmPassword', text)}
        />
        <Button onPress={() => this.handleSubmit()} title="Submit" />
      </View>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  register,
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
