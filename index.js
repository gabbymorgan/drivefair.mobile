/**
 * @format
 */

import React from 'react';
import {Navigation} from 'react-native-navigation';
import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';
import {Provider} from 'react-redux';

import store from '../DeliveryApp/app/reducers';
import AuthScreen from '../DeliveryApp/app/screens/AuthScreen';
import RouteScreen from '../DeliveryApp/app/screens/RouteScreen';
import OrderHistoryScreen from '../DeliveryApp/app/screens/OrderHistoryScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import {setBaseURL} from './app/services/http';
import {myTheme} from './app/theme';
import {loginRoot} from './app/navigation';
Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot(loginRoot);
});

setBaseURL('http://192.168.1.221:5000');

const RootHOC = (Component) => (props) => {
  return (
    <ApplicationProvider {...eva} theme={myTheme}>
      <Provider store={store}>
        <Component {...props} />
      </Provider>
    </ApplicationProvider>
  );
};

Navigation.registerComponent('com.myApp.AuthScreen', () => RootHOC(AuthScreen));
Navigation.registerComponent('com.myApp.RouteScreen', () =>
  RootHOC(RouteScreen),
);
Navigation.registerComponent('com.myApp.MessagesScreen', () =>
  RootHOC(MessagesScreen),
);
Navigation.registerComponent('com.myApp.OrderHistoryScreen', () =>
  RootHOC(OrderHistoryScreen),
);
