import {createStackNavigator} from '@react-navigation/stack';
import {ProductsScreen} from '../screens/product/ProductsScreen';
import {HomeScreen} from '../screens/home/HomeScreen';
import {SettingScreen} from '../screens/settings/SettingsScreen';
import {ProductScreen} from '../screens/product/ProductScreen';

export type RootStackParams = {
  Home: undefined;
  Product: {id: number; name: string};
  Products: undefined;
  Settings: undefined;
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="Settings" component={SettingScreen} />
      <Stack.Screen name="Product" component={ProductScreen} />
    </Stack.Navigator>
  );
};
