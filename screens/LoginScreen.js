import React, { Component } from 'react';
import { Text, View, TextInput, Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  inputPhoneNumber: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: 200,
    marginBottom: 20
  },
  registerBtn: {
    color: 'black',
    width: 10
  }
});
export default class LoginScreen extends Component {
  render() {
    const { onPress, onChange, phoneNumber } = this.props;
    return (
      <View>
        <TextInput
          style={styles.inputPhoneNumber}
          placeholder="번호를 입력해주세요"
          dataDetectorTypes="phoneNumber"
          keyboardType="numeric"
          onChange={onChange}
          maxLength={13}
          value={phoneNumber}
        />
        <Button style={styles.registerBtn} title="등록하기" onPress={onPress} />
      </View>
    );
  }
}
