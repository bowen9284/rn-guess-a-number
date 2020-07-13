import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import MainButton from '../components/MainButton';

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <TitleText>Game Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          // source={{
          //   uri:
          //     'https://mariacollege.edu/wp-content/uploads/2018/03/mountaintop-1200x676.jpg',
          // }}
          resizeMode="cover"
          source={require('../assets/success.png')}
        />
      </View>
      <View style={styles.resultsContainer}>
        <BodyText style={styles.resultText}>
          Your phone needed
          <Text style={styles.highlightText}> {props.numOfRounds}</Text> to
          guess the number. Your number was
          <Text style={styles.highlightText}> {props.userNumber}</Text>
        </BodyText>
      </View>
      <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: 20,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  highlightText: {
    color: Colors.primary,
    fontFamily: 'open-sans-bold',
  },
  resultsContainer: {
    margin: 20,
  },
  resultText: {
    textAlign: 'center',
    fontSize: 20,
  },
});

export default GameOverScreen;
