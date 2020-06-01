import types from '../actions/types';

const initialState = {
  orders: [],
  historicalOrders: [],
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case types.LOG_IN_SUCCESS:
      return {...state, status: payload.profile.status};
    case types.GET_ROUTE:
    case types.PICK_UP_ORDER:
    case types.DELIVER_ORDER:
    case types.REJECT_ORDER:
    case types.GET_ORDER_HISTORY:
      return {...state, isLoading: true};
    case types.TOGGLE_STATUS:
      return {...state, statusIsLoading: true};
    case types.TOGGLE_STATUS_FAIL:
      return {...state, statusIsLoading: false, error: payload.error};
    case types.GET_ROUTE_FAIL:
    case types.PICK_UP_ORDER_FAIL:
    case types.DELIVER_ORDER_FAIL:
    case types.REJECT_ORDER_FAIL:
    case types.GET_ORDER_HISTORY_FAIL:
      return {...state, isLoading: false, error: payload.error};
    case types.GET_ROUTE_SUCCESS:
    case types.PICK_UP_ORDER_SUCCESS:
    case types.DELIVER_ORDER_SUCCESS:
    case types.REJECT_ORDER_SUCCESS:
    case types.ACCEPT_ORDER_SUCCESS:
      return {...state, isLoading: false, orders: payload.orders};
    case types.TOGGLE_STATUS_SUCCESS:
      return {...state, statusIsLoading: false, status: payload.status};
    case types.GET_ORDER_HISTORY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        historicalOrders: payload.orderHistory,
      };
    default:
      return state;
  }
};
