import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './screens/LoginScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default class App extends Component {
  state = {
    isLogin: false,
    phoneNumber: ''
  };
  handleOnPressResister = () => {
    const { phoneNumber } = this.state;
  };
  handleOnChangePhoneNumberInput = e => {
    const inputText = e.nativeEvent.text;
    const { phoneNumber } = this.state;

    if (phoneNumber.length <= inputText.length) {
      if (inputText.length === 3 || inputText.length === 8) {
        this.setState({ phoneNumber: inputText + '-' });
      } else {
        this.setState({
          phoneNumber: inputText
        });
      }
    } else {
      this.setState({
        phoneNumber: inputText
      });
    }
  };
  render() {
    const { isLogin, phoneNumber } = this.state;
    const { handleOnPressResister, handleOnChangePhoneNumberInput } = this;
    return (
      <View style={styles.container}>
        {isLogin ? null : (
          <Login
            phoneNumber={phoneNumber}
            onPress={handleOnPressResister}
            onChange={handleOnChangePhoneNumberInput}
          />
        )}
      </View>
    );
  }
}
