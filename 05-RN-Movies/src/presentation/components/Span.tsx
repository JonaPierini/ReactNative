import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type Props = {
  text: string;
};

export const Span = ({text}: Props) => {
  return <Text style={style.spanFuente}>{text}</Text>;
};

const style = StyleSheet.create({
  spanFuente: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontSize: 30,
    color: '#2E3749',
  },
});
