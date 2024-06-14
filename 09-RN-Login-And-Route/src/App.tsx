import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppNavigation} from './presentation/navigation/AppNavigation/AppNavigation';

const Stack = createNativeStackNavigator();
export const App = () => {
  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
};
