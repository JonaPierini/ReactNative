import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {View, Text} from 'react-native';
import {ProductScreen} from '../../screen/product/ProductScreen';
import {SettingScreen} from '../../screen/setting/SettingScreen';
import {HomeScreen} from '../../screen/home/HomeScreen';

const Tab = createBottomTabNavigator();

export const RouteNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        unmountOnBlur: true,
        tabBarHideOnKeyboard: true,
        headerShown: false,
      }}>
      <Tab.Screen name={'HomeScreen'} component={HomeScreen} />
      <Tab.Screen name={'ProductScreen'} component={ProductScreen} />
      <Tab.Screen name={'SettingScreen'} component={SettingScreen} />
    </Tab.Navigator>
  );
};
