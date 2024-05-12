import {Text, View} from 'react-native';
import {Span} from '../../components/Span';

export const DetailsScreen = (props: any) => {
  // console.log(props.route.params.description.description);
  console.log(props);
  return (
    <View>
      <Span>DetailScreen</Span>
    </View>
  );
};
