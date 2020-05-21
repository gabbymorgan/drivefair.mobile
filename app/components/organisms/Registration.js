import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, Layout, Input} from '@ui-kitten/components';

import {register} from '../../actions/session';
import { formStyles } from "../../theme/styles";

export class Registration extends Component {
  state = {};

  handleChange(name, value) {
    this.setState({[name]: value});
  }

  handleSubmit() {
    this.props.register({...this.state});
  }

  render() {
    return (
      <Layout>
        <Input
          style={formStyles.textInput}
          placeholder="First Name"
          name="firstName"
          value={this.state.firstName}
          textContentType="givenName"
          onChangeText={(text) => this.handleChange('firstName', text)}
        />
        <Input
          style={formStyles.textInput}
          placeholder="Last Name"
          name="lastName"
          value={this.state.lastName}
          textContentType="familyName"
          onChangeText={(text) => this.handleChange('lastName', text)}
        />
        <Input
          style={formStyles.textInput}
          placeholder="Phone"
          name="phoneNumber"
          value={this.state.phone}
          textContentType="telephoneNumber"
          onChangeText={(text) => this.handleChange('phoneNumber', text)}
        />
        <Input
          style={formStyles.textInput}
          placeholder="Email"
          name="email"
          value={this.state.email}
          autoCapitalize="none"
          textContentType="emailAddress"
          onChangeText={(text) => this.handleChange('email', text)}
        />
        <Input
          style={formStyles.textInput}
          placeholder="Password"
          name="password"
          value={this.state.password}
          autoCapitalize="none"
          secureTextEntry={true}
          textContentType="password"
          onChangeText={(text) => this.handleChange('password', text)}
        />
        <Input
          style={formStyles.textInput}
          placeholder="Confirm Password"
          name="confirmPassword"
          value={this.state.confirmPassword}
          autoCapitalize="none"
          secureTextEntry={true}
          textContentType="password"
          onChangeText={(text) => this.handleChange('confirmPassword', text)}
        />
        <Button onPress={() => this.handleSubmit()}>Submit</Button>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  register,
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
