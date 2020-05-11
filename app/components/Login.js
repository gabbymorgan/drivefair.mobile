import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Layout, Button, Input} from '@ui-kitten/components';

import {getPermission} from '../services/location';

import {login} from '../actions/session';
import {formStyles} from '../theme/styles';

export class Login extends Component {
  state = {};

  componentDidMount = async () => {
    await getPermission();
  };

  handleChange(name, value) {
    this.setState({[name]: value});
  }

  handleSubmit() {
    this.props.login({...this.state});
  }

  render() {
    return (
      <Layout>
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
          autoCapitalize="none"
          secureTextEntry={true}
          textContentType="password"
          value={this.state.password}
          onChangeText={(text) => this.handleChange('password', text)}
        />
        <Button onPress={() => this.handleSubmit()}>Submit</Button>
      </Layout>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
