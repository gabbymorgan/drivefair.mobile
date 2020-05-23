import types from './types';
import {Navigation} from 'react-native-navigation';
import {modalStack} from '../navigation';
import {getRoute} from './route';

export const receivePushNotification = (message) => async (dispatch) => {
  dispatch({type: types.RECEIVE_PUSH_NOTIFICATION, payload: {message}});
  if (message.data.openModal === 'true') {
    Navigation.showModal(modalStack);
  }
  switch (message.data.messageType) {
    case 'ORDER_READY':
    case 'ORDER_CANCELED':
      return dispatch(getRoute());
  }
};
