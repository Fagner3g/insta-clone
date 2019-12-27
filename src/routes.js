import React from 'react';
import { Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Feeds from './pages/Feeds';

import logo from './assets/instagram.png';

const AppNavigation = createStackNavigator(
  {
    Feeds,
  },
  {
    headerLayoutPreset: 'center',
    defaultNavigationOptions: {
      headerTitle: <Image source={logo} />,
      headerStyle: {
        backgroundColor: '#f5f5f5',
      },
    },
  },
);

export default Router = createAppContainer(AppNavigation);
