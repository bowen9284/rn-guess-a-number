import React from 'react';
import { StyleSheet, Text } from 'react-native';

const TitleText = (props) => {
  return <Text style={{...styles.title, ...props.customStyle}}>{props.children}</Text>;
};

export default TitleText;

const styles = StyleSheet.create({
  body: {
    fontFamily: 'open-sans-bold',
    fontSize: 18,
  },
});
