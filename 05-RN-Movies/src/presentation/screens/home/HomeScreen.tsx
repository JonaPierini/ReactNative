import {Text, View} from 'react-native';
import {useHookMovies} from '../../hooks/useHookMovies';
import {ScrollView} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Carrouse} from '../../components/Carrouse';

export const HomeScreen = () => {
  const {isLoading, nowMovies, popularMovies, topRatedMovies, upcomingMovies} =
    useHookMovies();

  //Esto no aseguro que en ambos dispositivos se ve con el top que ponemos
  const {top} = useSafeAreaInsets();

  if (isLoading) {
    return <Text>Carrgando...</Text>;
  }

  return (
    <ScrollView>
      <View style={{marginTop: top + 20, paddingBottom: 30}}>
        <Carrouse movies={nowMovies}></Carrouse>
      </View>
    </ScrollView>
  );
};
