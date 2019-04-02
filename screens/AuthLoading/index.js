import React, { Component } from 'react';
import {
  Text,
  AsyncStorage,
  View,
  ActivityIndicator,
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
});
export default class AuthLoadingScreen extends Component {
  constructor(props) {
    super(props);
    setTimeout(() => {
      this._bootstrapAsync();
    }, 1000);
  }
  _bootstrapAsync = async () => {
    // const userToken = await AsyncStorage.getItem('userToken');
    // this.props.navigation.navigate(userToken ? 'MainTab' : 'Auth');
    this.props.navigation.navigate('Auth');
  };
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
}
