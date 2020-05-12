import types from '../actions/types';

const initialState = {
  activeOrders: []
};

export default (state = initialState, {type, payload}) => {
  switch (type) {
    default:
      return state;
  }
};
