const actionsObj = {};

const asyncActions = [
  'GET_DRIVER_PROFILE',
  'NEW_DRIVER',
  'GET_ROUTE',
  'TOGGLE_STATUS',
  'GET_ORDER_HISTORY',
  'REFUND_ORDER',
  'DELIVER_ORDER',
  'LOG_IN',
  'REGISTER',
  'SEND_CONFIRMATION_EMAIL',
];
const syncActions = ['LOG_OUT'];

syncActions.forEach((key) => {
  actionsObj[key] = key;
});

asyncActions.forEach((key) => {
  actionsObj[key] = key;
  actionsObj[`${key}_FAIL`] = `${key}_FAIL`;
  actionsObj[`${key}_SUCCESS`] = `${key}_SUCCESS`;
});

export default actionsObj;
