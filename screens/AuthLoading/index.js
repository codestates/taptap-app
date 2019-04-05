import React, { Component } from 'react';
import {
  AsyncStorage,
  View,
  Image,
  ActivityIndicator,
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FDC20E'
  }
});
export default class AuthLoadingScreen extends Component {
  constructor(props) {
    super(props);
    setTimeout(() => {
      this._bootstrapAsync();
    }, 3000);
  }
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    console.log(
      'TCL: AuthLoadingScreen -> _bootstrapAsync -> userToken',
      userToken
    );

    this.props.navigation.navigate(userToken ? 'Main' : 'Auth');
    this.props.navigation.navigate('Auth');
  };
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../../assets/Loding.gif')} />
        <ActivityIndicator size="large" />
      </View>
    );
  }
}
