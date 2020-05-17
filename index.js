/**
 * @format
 */

import React from 'react';
import {Navigation} from 'react-native-navigation';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {Provider} from 'react-redux';
import {EvaIconsPack} from '@ui-kitten/eva-icons';

import store from './app/reducers';
import AuthScreen from './app/screens/AuthScreen';
import RouteScreen from './app/screens/RouteScreen';
import OrderHistoryScreen from './app/screens/OrderHistoryScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import {setBaseURL} from './app/services/http';
import {myTheme} from './app/theme';
import {loginRoot} from './app/navigation';
import StatusToggle from './app/components/StatusToggle';
import Toast from './app/components/Toast';

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot(loginRoot);
});

setBaseURL('http://192.168.1.12:5000');

const RootHOC = (Component) => (props) => (
  <React.Fragment>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={myTheme}>
      <Provider store={store}>
        <Component {...props} />
      </Provider>
    </ApplicationProvider>
  </React.Fragment>
);

console.disableYellowBox = true;

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
Navigation.registerComponent('com.myApp.StatusToggle', () =>
  RootHOC(StatusToggle),
);

Navigation.registerComponent('com.myApp.Toast', () => RootHOC(Toast));
