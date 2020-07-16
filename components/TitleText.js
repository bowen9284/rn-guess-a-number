import React from 'react';
import { StyleSheet, Text, Platform } from 'react-native';
import Colors from '../constants/colors';

const TitleText = (props) => {
  return (
    <Text style={{ ...styles.title, ...props.style }}>
      {props.children}
    </Text>
  );
};

export default TitleText;

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 18,
  },
});
