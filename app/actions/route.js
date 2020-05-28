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

export const setLocation = () => async (dispatch) => {
  dispatch({type: types.SET_LOCATION});
  try {
    const locationResponse = await getLocation();
    const {latitude, longitude} = locationResponse.coords;
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

export const driverRejectOrder = (orderId) => async (dispatch) => {
  dispatch({type: types.REJECT_ORDER});
  try {
    const response = await axios.post('/route/rejectOrder', {orderId});
    if (!response.data || response.data.error) {
      dispatch({type: types.REJECT_ORDER_FAIL, payload: response.data});
    }
    dispatch({
      type: types.REJECT_ORDER_SUCCESS,
      payload: {...response.data},
    });
  } catch (error) {
    dispatch({type: types.REJECT_ORDER_FAIL, payload: {error}});
  }
};

export const driverAcceptOrder = (orderId) => async (dispatch) => {
  dispatch({type: types.ACCEPT_ORDER});
  try {
    const response = await axios.post('/route/acceptOrder', {orderId});
    if (!response.data || response.data.error) {
      dispatch({type: types.ACCEPT_ORDER_FAIL, payload: response.data});
    }
    dispatch({
      type: types.ACCEPT_ORDER_SUCCESS,
      payload: {...response.data},
    });
  } catch (error) {
    dispatch({type: types.ACCEPT_ORDER_FAIL, payload: {error}});
  }
};

export const driverPickUpOrder = (orderId) => async (dispatch) => {
  dispatch({type: types.PICK_UP_ORDER});
  try {
    const response = await axios.post('/route/pickUpOrder', {orderId});
    if (!response.data || response.data.error) {
      dispatch({type: types.PICK_UP_ORDER_FAIL, payload: response.data});
    }
    dispatch({
      type: types.PICK_UP_ORDER_SUCCESS,
      payload: {...response.data},
    });
  } catch (error) {
    dispatch({type: types.PICK_UP_ORDER_FAIL, payload: {error}});
  }
};

export const driverDeliverOrder = (orderId) => async (dispatch) => {
  dispatch({type: types.DELIVER_ORDER});
  try {
    const response = await axios.post('/route/DeliverOrder', {orderId});
    if (!response.data || response.data.error) {
      dispatch({type: types.DELIVER_ORDER_FAIL, payload: response.data});
    }
    dispatch({
      type: types.DELIVER_ORDER_SUCCESS,
      payload: {...response.data},
    });
  } catch (error) {
    dispatch({type: types.DELIVER_ORDER_FAIL, payload: {error}});
  }
};

export const getOrderHistory = () => async (dispatch) => {
  dispatch({type: types.GET_ORDER_HISTORY});
  try {
    const response = await axios.get('/orders/history');
    if (!response.data || response.data.error) {
      dispatch({type: types.GET_ORDER_HISTORY_FAIL, payload: response.data});
    }
    dispatch({
      type: types.GET_ORDER_HISTORY_SUCCESS,
      payload: {...response.data},
    });
  } catch (error) {
    dispatch({type: types.GET_ORDER_HISTORY_FAIL, payload: {error}});
  }
};
