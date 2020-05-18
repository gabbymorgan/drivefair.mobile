import axios from 'axios';

import types from './types';
import {Navigation} from 'react-native-navigation';
import {modalStack} from '../navigation';

export const receivePushNotification = (message) => async (dispatch) => {
  dispatch({type: types.RECEIVE_PUSH_NOTIFICATION, payload: {message}});
  if (message.data.openModal === 'true') {
    Navigation.showModal(modalStack);
  }
};
