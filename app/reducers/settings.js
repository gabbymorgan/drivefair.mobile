import types from '../actions/types';

const initialState = {};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case types.GET_APP_SETTINGS:
      return {...state, isLoading: true};

    case types.GET_APP_SETTINGS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: payload.error,
      };

    case types.GET_APP_SETTINGS_SUCCESS:
      return {...state, isLoading: false, ...payload};

    default:
      return state;
  }
};
