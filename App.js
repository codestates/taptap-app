import React, { Component } from 'react';
import Navigator from './screens/Navigator';
import { StyleSheet, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import ustils from './utils';
import Login from './screens/LoginScreen';

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center'
//   }
// });

export default class App extends Component {
  state = {
    isLogin: false,
    phoneNumber: ''
  };
  handleOnPressResister = () => {
    console.log('Press!!!!');
    const { phoneNumber } = this.state;

    if (phoneNumber.length === 13) {
      ustils
        .fetchPostData('/apps/customers/signin-customer', {
          phoneNumber: phoneNumber
        })
        .then(json => {
          //json[1] => 이미 존재하면 true 아니면 false
          if (json[1]) {
            //등록완료
            alert('등록완료');
          } else {
            //이미 존재
            alert('이미존재');
          }
        })
        .catch(error => console.error(error));
    }
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
    return <Navigator />;
    // return (
    //   <View style={styles.container}>
    //     {isLogin ? null : (
    //       <Login
    //         phoneNumber={phoneNumber}
    //         onPress={handleOnPressResister}
    //         onChange={handleOnChangePhoneNumberInput}
    //       />
    //     )}
    //   </View>
    // );
  }
}
