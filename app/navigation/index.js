import React from 'react';

export const loginRoot = {
  root: {
    stack: {
      children: [
        {
          component: {
            name: 'com.myApp.AuthScreen',
            options: {
              topBar: {
                visible: false,
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
                icon: require("../assets/eva/fill/png/128/car.png")
              },
              topBar: {
                visible: false,
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
                icon: require("../assets/eva/fill/png/128/folder.png")
              },
              topBar: {
                visible: false,
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
