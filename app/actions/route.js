import axios from 'axios';

import types from './types';

export const getRoute = () => async (dispatch) => {
  dispatch({type: types.GET_ROUTE});
  try {
    const response = await axios.get('/route/');
    if (!response.data || response.data.error) {
      dispatch({type: types.GET_ROUTE_FAIL, payload: response.data});
    }
    dispatch({
      type: types.GET_ROUTE_SUCCESS,
      payload: {...response.data},
    });
  } catch (error) {
    dispatch({type: types.GET_ROUTE_FAIL, payload: {error}});
  }
};

export const toggleStatus = (status) => async (dispatch) => {
  dispatch({type: types.TOGGLE_STATUS});
  try {
    const response = await axios.post('/drivers/toggleStatus', {status});
    if (!response.data || response.data.error) {
      dispatch({type: types.TOGGLE_STATUS_FAIL, payload: response.data});
    }
    dispatch({
      type: types.TOGGLE_STATUS_SUCCESS,
      payload: {...response.data},
    });
  } catch (error) {
    dispatch({type: types.TOGGLE_STATUS_FAIL, payload: {error}});
  }
};
