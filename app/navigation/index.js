import React from 'react';
import {myTheme} from '../theme';
import store from '../reducers/index';

export const loginRoot = {
  root: {
    stack: {
      children: [
        {
          component: {
            name: 'com.myApp.AuthScreen',
            options: {
              topBar: {
                visible: 'false',
              },
            },
          },
        },
      ],
    },
  },
};

export const mainRoot = {
  root: {
    bottomTabs: {
      children: [
        {
          stack: {
            children: [
              {
                component: {
                  name: 'com.myApp.RouteScreen',
                },
              },
            ],
            options: {
              bottomTab: {
                icon: require('../assets/eva/fill/png/128/car.png'),
              },
              topBar: {
                title: {
                  text: 'Deliveries',
                  color: 'white',
                },
                background: {
                  color: myTheme['color-basic-800'],
                  translucent: true,
                },
                rightButtons: [
                  {
                    id: 'STATUS_TOGGLE',
                    component: {
                      name: 'com.myApp.StatusToggle',
                      text: 'suh',
                    },
                  },
                ],
              },
            },
          },
        },
        {
          stack: {
            children: [
              {
                component: {
                  name: 'com.myApp.OrderHistoryScreen',
                },
              },
            ],
            options: {
              bottomTab: {
                icon: require('../assets/eva/fill/png/128/folder.png'),
              },
              topBar: {
                title: {
                  text: 'Order History',
                  color: 'white',
                },
                background: {
                  color: myTheme['color-basic-800'],
                  translucent: true,
                },
                rightButtons: [
                  {
                    id: 'STATUS_TOGGLE',
                    component: {
                      name: 'com.myApp.StatusToggle',
                      text: 'suh',
                    },
                  },
                ],
              },
              bottomTabs: {
                barStyle: 'black',
                translucent: true,
              },
            },
          },
        },
        {
          stack: {
            children: [
              {
                component: {
                  name: 'com.myApp.MessagesScreen',
                },
              },
            ],
            options: {
              bottomTab: {
                icon: require('../assets/eva/fill/png/128/message-square.png'),
              },
              topBar: {
                title: {
                  text: 'Messages',
                  color: 'white',
                },
                background: {
                  color: myTheme['color-basic-800'],
                  translucent: true,
                },
                rightButtons: [
                  {
                    id: 'STATUS_TOGGLE',
                    component: {
                      name: 'com.myApp.StatusToggle',
                      text: 'suh',
                    },
                  },
                ],
              },
              bottomTabs: {
                barStyle: 'black',
                translucent: true,
              },
            },
          },
        },
      ],
    },
  },
};

export const modalStack = {
  stack: {
    children: [
      {
        component: {
          id: "toast",
          name: 'com.myApp.Toast',
          options: {
            topBar: {
              visible: false,
            },
          },
        },
      },
    ],
  },
};
