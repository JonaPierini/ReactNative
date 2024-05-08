import {Text, View} from 'react-native';
import {useHookMovies} from '../../hooks/useHookMovies';

export const HomeScreen = () => {
  const {} = useHookMovies();

  return (
    <View>
      <Text>HomeScreddden</Text>
    </View>
  );
};
