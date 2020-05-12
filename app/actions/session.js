import axios from 'axios';
import types from './types';
import {setBearerToken} from '../services/http';
import AsyncStorage from '@react-native-community/async-storage';

export const register = (attributes) => async (dispatch) => {
  dispatch({type: types.REGISTER});
  try {
    const response = await axios.post('/drivers/register', attributes);
    const {token} = response.data;
    await AsyncStorage.clear();
    await AsyncStorage.setItem('authToken', token);
    dispatch(loginWithToken(token));
  } catch (error) {
    dispatch({type: types.REGISTER_FAIL, payload: {error}});
    dispatch(logout());
  }
};

export const login = ({email, password}) => async (dispatch) => {
  dispatch({type: types.LOG_IN});
  try {
    const response = await axios.post('/drivers/login', {
      email,
      password,
    });
    const {token} = response.data;
    await AsyncStorage.clear();
    await AsyncStorage.setItem('authToken', token);
    dispatch(loginWithToken(token));
  } catch (error) {
    dispatch({type: types.LOG_IN_FAIL, payload: {error}});
    dispatch(logout());
  }
};

export const loginWithToken = (token) => async (dispatch) => {
  dispatch({type: types.LOG_IN});
  try {
    setBearerToken(token);
    const response = await axios.get(`/drivers/me`);
    if (!response.data || !response.data.profile) {
      await AsyncStorage.clear();
      dispatch({type: types.LOG_IN_FAIL, payload: response.data});
      dispatch(logout());
    }
    dispatch({
      type: types.LOG_IN_SUCCESS,
      payload: {...response.data, token},
    });
  } catch (error) {
    dispatch({type: types.LOG_IN_FAIL, payload: {error}});
    dispatch(logout());
  }
};

export const sendConfirmationEmail = () => async (dispatch) => {
  dispatch({type: types.SEND_CONFIRMATION_EMAIL});
  try {
    const response = await axios.post(`/drivers/sendConfirmationEmail`);
    dispatch({
      type: types.SEND_CONFIRMATION_EMAIL_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({type: types.SEND_CONFIRMATION_EMAIL_FAIL, payload: {error}});
  }
};

export const logout = () => async (dispatch) => {
  setBearerToken('');
  await AsyncStorage.clear();
  dispatch({type: types.LOG_OUT});
};
