import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text} from 'react-native';
import {LoginScreen} from '../../screen/login/LoginScreen';
import {HomeScreen} from '../../screen/home/HomeScreen';
import {RouteNavigation} from '../RouteNavigation/RouteNavigation';

const Stack = createNativeStackNavigator();

export const AppNavigation = () => {
  const status = 'unAuthorized';

  return status !== 'unAuthorized' ? (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  ) : (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={RouteNavigation} />
    </Stack.Navigator>
  );
};
