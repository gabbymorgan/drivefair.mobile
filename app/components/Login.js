import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Button, TextInput, TouchableOpacity} from 'react-native';

import {getPermission} from '../services/location';

import {login} from '../actions/session';

export class Login extends Component {
  state = {};

  componentDidMount = async () => {
    await getPermission();
  };

  handleChange({name, value}) {
    this.setState({[name]: value});
  }

  handleSubmit() {
    this.props.login({...this.state});
  }

  render() {
    return (
      <View>
        <View>
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
          <Button
            onPress={() => this.handleSubmit()}
            title="Submit"
          />
        </View>
        <View>
          <TouchableOpacity icon="done" />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  login,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
