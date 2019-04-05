import React, { Component } from 'react';
import { Text, TextInput, View, Image, StyleSheet } from 'react-native';
import { Font } from 'expo';
import _Button from '../../components/Common/_Button';
import utils from '../../utils';

const styles = StyleSheet.create({
  authContainer: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    marginTop: 20
  },
  imageView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 50
  },
  resistereView: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  inputPhoneNumber: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    textAlign: 'center',
    width: '90%',
    marginBottom: 10,
    fontSize: 25,
    fontFamily: 'Gamja-Flower-Regular'
  },
  title: {
    fontFamily: 'Gamja-Flower-Regular',
    fontSize: 70
  }
});
export default class Auth extends Component {
  state = {
    phoneNumber: ''
  };

  _inputPhoneNumber = e => {
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

  _pressResisterBtn = () => {
    const { phoneNumber } = this.state;

    if (phoneNumber.length === 13) {
      utils
        .fetchPostData('/apps/customers/signin-customer', {
          phoneNumber: phoneNumber
        })
        .then(json => {
          //json[1] => 이미 존재하면 true 아니면 false
          if (json[1]) {
            //등록완료
            //메인 화면으로
            this.props.navigation.navigate('Main', json[0]);
            AsyncStorage.setItem('userToken', json[0].id);
          } else {
            //이미 존재
            this.props.navigation.navigate('Main', json[0]);
          }
        })
        .catch(error => console.error(error));
    } else {
      alert('번호를 모두 입력해주세요.');
    }
  };

  render() {
    const { _pressResisterBtn, _inputPhoneNumber } = this;
    const { phoneNumber } = this.state;

    return (
      <View style={styles.authContainer}>
        <View style={styles.imageView}>
          <Text style={styles.title}>꾹꾹이</Text>
          <Image source={require('../../assets/logo.png')} />
        </View>
        <View style={styles.resistereView}>
          <TextInput
            style={styles.inputPhoneNumber}
            placeholder="번호를 입력해주세요"
            dataDetectorTypes="phoneNumber"
            keyboardType="numeric"
            onChange={_inputPhoneNumber}
            maxLength={13}
            value={phoneNumber}
          />
          <_Button onPress={_pressResisterBtn} title={'눌러주세요!'} />
        </View>
      </View>
    );
  }
}
