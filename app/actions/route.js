import axios from 'axios';

import types from './types';
import {getLocation} from '../services/location';

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

export const setLocation = (location) => async (dispatch) => {
  dispatch({type: types.SET_LOCATION});
  try {
    const locationResponse = await getLocation();
    const {latitude, longitude} = locationResponse.coords;
    console.log({latitude});
    const response = await axios.post('/drivers/setLocation', {
      latitude,
      longitude,
    });
    if (!response.data || response.data.error) {
      dispatch({type: types.SET_LOCATION_FAIL, payload: response.data});
    }
    dispatch({
      type: types.SET_LOCATION_SUCCESS,
      payload: {...response.data},
    });
  } catch (error) {
    dispatch({type: types.SET_LOCATION_FAIL, payload: {error}});
  }
};
