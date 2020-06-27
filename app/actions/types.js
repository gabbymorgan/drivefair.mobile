const actionsObj = {};

const asyncActions = [
  'ACCEPT_ORDER',
  'DELIVER_ORDER',
  'GET_DRIVER_PROFILE',
  'GET_ORDER_HISTORY',
  'GET_ROUTE',
  'LOG_IN',
  'NEW_DRIVER',
  'PICK_UP_ORDER',
  'REFUND_ORDER',
  'REGISTER',
  'REJECT_ORDER',
  'SEND_CONFIRMATION_EMAIL',
  'SET_LOCATION',
  'TOGGLE_STATUS',
];

const syncActions = [
  'LOG_OUT',
  'ORDER_CANCELED',
  'ORDER_READY',
  'RECEIVE_PUSH_NOTIFICATION',
  'SHOW_REQUEST_DRIVER_MODAL',
];

syncActions.forEach((key) => {
  actionsObj[key] = key;
});

asyncActions.forEach((key) => {
  actionsObj[key] = key;
  actionsObj[`${key}_FAIL`] = `${key}_FAIL`;
  actionsObj[`${key}_SUCCESS`] = `${key}_SUCCESS`;
});

export default actionsObj;
