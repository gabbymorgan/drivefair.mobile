import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, ButtonGroup, Layout, Spinner} from '@ui-kitten/components';
import AsyncStorage from '@react-native-community/async-storage';

import {StyleSheet} from 'react-native';
import {getPermission} from '../services/location';
import {login, loginWithToken} from '../actions/session';
import Login from '../components/Login';
import Registration from '../components/Registration';
import {mainRoot} from '../navigation';
import {Navigation} from 'react-native-navigation';

export class AuthScreen extends Component {
  state = {
    screen: 'login',
  };

  componentDidMount = async () => {
    await getPermission();
    const authToken = await AsyncStorage.getItem('authToken');
    if (authToken) {
      this.props.loginWithToken(authToken);
    }
  };

  componentDidUpdate() {
    if (this.props.isLoggedIn) {
      console.log('suh')
      Navigation.setRoot(mainRoot);
    }
  }

  handleChange({name, value}) {
    this.setState({[name]: value});
  }

  handleSubmit() {
    this.props.login({...this.state});
  }

  render() {
    if (this.props.isLoading) {
      return (
        <Layout style={styles.container}>
          <Spinner />
        </Layout>
      );
    }
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
    justifyContent: "center",
    alignItems: "center"
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

const mapStateToProps = (state) => ({
  isLoggedIn: state.session.isLoggedIn,
  isLoading: state.session.isLoading,
});

const mapDispatchToProps = {
  login,
  loginWithToken,
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthScreen);
