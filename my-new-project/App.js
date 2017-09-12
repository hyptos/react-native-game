import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  Platform,
  StatusBar
} from 'react-native';

import HomeScreen from './screens/HomeScreen';
import GameScreen from './screens/GameScreen';
import EndScreen from './screens/EndScreen';

import {
  StackNavigator,
} from 'react-navigation';

class StartScreen extends React.Component {
  static navigationOptions = {
    title: 'Start'
  };
}

if (Platform.OS === 'android') {
    stackConfig = {
        navigationOptions: {
            headerStyle: {
              paddingTop: StatusBar.currentHeight,
              height: 56 + StatusBar.currentHeight,
              elevation: 0
            }
        }
    };
}


export default StackNavigator({
  Home: {
    screen: HomeScreen
  },
  Game: {
      screen: GameScreen
  },
  End: {
      screen: EndScreen
  }
}, stackConfig);