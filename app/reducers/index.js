import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import session from './session';
import settings from './settings';
import route from './route';
import notifications from './notifications';
import messages from './messages';

const rootReducer = combineReducers({
  session,
  settings,
  route,
  notifications,
  messages,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, logger)),
);

export default store;
