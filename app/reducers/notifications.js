import types from '../actions/types';

const initialState = {
  // messages: [],
  modalData: {},
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case types.GET_MESSAGES:
      return {...state, isLoading: true};
    case types.GET_MESSAGES_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload.error,
      };
    case types.GET_MESSAGES_SUCCESS:
      return {...state, isLoading: false, ...payload};
    // case types.RECEIVE_PUSH_NOTIFICATION:
    //   return {
    //     ...state,
    //     messages: [...state.messages, payload.message],
    //   };
    case types.SHOW_REQUEST_DRIVER_MODAL:
      return {
        ...state,
        modalData: payload.message.data,
        timeReceived: payload.timeReceived,
      };
    default:
      return state;
  }
};
