import types from '../actions/types';

const initialState = {
  orders: [],
  vendor: '',
  status: '',
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case types.LOG_IN_SUCCESS:
      return {...state, status: payload.profile.status};
    case types.GET_ROUTE:
    case types.PICK_UP_ORDER:
    case types.DELIVER_ORDER:
    case types.REJECT_ORDER:
      return {...state, isLoading: true};
    case types.TOGGLE_STATUS:
      return {...state, statusIsLoading: true};
    case types.TOGGLE_STATUS_FAIL:
      return {...state, statusIsLoading: false, error: payload.error};
    case types.GET_ROUTE_FAIL:
    case types.PICK_UP_ORDER_FAIL:
    case types.DELIVER_ORDER_FAIL:
    case types.REJECT_ORDER_FAIL:
      return {...state, isLoading: false, error: payload.error};
    case types.GET_ROUTE_SUCCESS:
    case types.GET_ROUTE_SUCCESS:
    case types.PICK_UP_ORDER_SUCCESS:
    case types.DELIVER_ORDER_SUCCESS:
    case types.REJECT_ORDER_SUCCESS:
      return {...state, isLoading: false, ...payload.route};
    case types.TOGGLE_STATUS_SUCCESS:
      return {...state, statusIsLoading: false, status: payload.status};
    default:
      return state;
  }
};
