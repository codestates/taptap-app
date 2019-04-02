import React, { Component } from 'react';
import { TextInput, Button, View } from 'react-native';

export default class Auth extends Component {
  _login = () => {
    // AsyncStorage.setItem('userToken', 'add_token');
    this.props.navigation.navigate('Main');
  };
  render() {
    const { _login } = this;
    return (
      <View>
        <TextInput
          // style={styles.inputPhoneNumber}
          placeholder="번호를 입력해주세요"
          dataDetectorTypes="phoneNumber"
          keyboardType="numeric"
          // onChange={onChange}
          maxLength={13}
          // value={phoneNumber}
        />
        <Button
          // style={styles.registerBtn}
          title="등록하기"
          onPress={_login}
        />
      </View>
    );
  }
}
