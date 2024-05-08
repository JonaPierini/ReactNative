import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../screens/home/HomeScreen';
import {DetailsScreen} from '../screens/details/DetailsScreen';

export type RootStackParams = {
  Home: undefined;
  Details: {movieId: number};
};

//Este es el StackNavigator

const Stack = createStackNavigator<RootStackParams>();

export const Navigation = () => {
  return (
    //Para oculatar los header (titulos de arriba)
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};
