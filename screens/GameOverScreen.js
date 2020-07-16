import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  Dimensions,
} from 'react-native';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import MainButton from '../components/MainButton';

const GameOverScreen = (props) => {
  return (
    <ScrollView>
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  imageContainer: {
    width: Dimensions.get('window').width * 0.7,
    height: Dimensions.get('window').width * 0.7,
    borderRadius: (Dimensions.get('window').width * 0.7) / 2,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: Dimensions.get('window').height / 30,
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
    marginHorizontal: 20,
    marginVertical: Dimensions.get('window').height / 60,
  },
  resultText: {
    textAlign: 'center',
    fontSize: Dimensions.get('window').height < 400 ? 16 : 20,
  },
});

export default GameOverScreen;
