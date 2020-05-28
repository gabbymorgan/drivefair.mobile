import types from './types';
import {Navigation} from 'react-native-navigation';
import {modalStack} from '../navigation';
import {getRoute} from './route';

export const receivePushNotification = (message) => async (dispatch) => {
  dispatch({
    type: types.RECEIVE_PUSH_NOTIFICATION,
    payload: {message},
  });
  switch (message.data.messageType) {
    case 'ORDER_READY':
    case 'ORDER_CANCELED':
      return dispatch(getRoute());
  }
  if (message.data.openModal === 'true') {
    dispatch({
      type: types.SHOW_REQUEST_DRIVER_MODAL,
      payload: {message, timeReceived: Date.now()},
    });
    Navigation.showModal(modalStack);
  }
};

export const openMessageModal = (messageType) => (dispatch) => {
  Navigation.showModal(modalStack);
};
