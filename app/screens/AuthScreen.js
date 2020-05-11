import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, ButtonGroup, Layout} from '@ui-kitten/components';

import {StyleSheet} from 'react-native';
import {getPermission} from '../services/location';
import {login} from '../actions/session';
import Login from '../components/Login';
import Registration from '../components/Registration';

export class AuthScreen extends Component {
  state = {
    screen: 'login',
  };

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
      <Layout style={styles.container}>
        <Layout style={styles.form}>
          {this.state.screen === 'login' ? <Login /> : <Registration />}
        </Layout>
        <Layout style={styles.selection}>
          <ButtonGroup>
            <Button onPress={() => this.setState({screen: 'login'})}>
              Login
            </Button>
            <Button onPress={() => this.setState({screen: 'register'})}>
              Register
            </Button>
          </ButtonGroup>
        </Layout>
      </Layout>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  form: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  login,
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthScreen);
