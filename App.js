import React, { Component } from 'react';
import Navigator from './screens/Navigator';
import { Font } from 'expo';

export default class App extends Component {
  componentDidMount() {
    Font.loadAsync({
      'Gamja-Flower-Regular': require('./assets/font/GamjaFlower-Regular.ttf')
    });
  }
  render() {
    console.disableYellowBox = true;
    return <Navigator />;
  }
}
