import React, { Component } from 'react';
import { TextInput, Button, View, StyleSheet } from 'react-native';
import utils from '../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputPhoneNumber: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: 200,
    marginBottom: 20
  },
  registerBtn: {
    color: 'black',
    width: 200
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
    // AsyncStorage.setItem('userToken', 'add_token');
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
            alert('등록완료');
            //메인 화면으로
            this.props.navigation.navigate('Main', json[0]);
          } else {
            //이미 존재
            alert('이미존재');
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
      <View style={styles.container}>
        <TextInput
          style={styles.inputPhoneNumber}
          placeholder="번호를 입력해주세요"
          dataDetectorTypes="phoneNumber"
          keyboardType="numeric"
          onChange={_inputPhoneNumber}
          maxLength={13}
          value={phoneNumber}
        />
        <Button
          style={styles.registerBtn}
          title="등록하기"
          onPress={_pressResisterBtn}
        />
      </View>
    );
  }
}
