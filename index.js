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
import {setBaseURL} from '../DeliveryApp/app/services/http';
import {myTheme} from './app/theme';

setBaseURL('http://192.168.1.147:5000');

const RootHOC = (Component) => (props) => {
  return (
    <ApplicationProvider {...eva} theme={myTheme}>
      <Provider store={store}>
        <Component {...props} />
      </Provider>
    </ApplicationProvider>
  );
};

Navigation.registerComponent('com.myApp.AuthScreen', () =>
  RootHOC(AuthScreen),
);
Navigation.registerComponent('com.myApp.RouteScreen', () =>
  RootHOC(RouteScreen),
);
Navigation.registerComponent('com.myApp.OrderHistoryScreen', () =>
  RootHOC(OrderHistoryScreen),
);
Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'com.myApp.AuthScreen',
            },
          },
        ],
      },
    },
  });
});
