import React, { Component } from 'react';
import { TouchableHighlight, Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  registerContainer: {
    width: '90%',
    alignItems: 'center',
    backgroundColor: '#FDC20E'
  },
  registerBtn: {
    width: '100%',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10
  }
});

export default class _Button extends Component {
  render() {
    const { onPress, title } = this.props;
    return (
      <View style={styles.registerContainer}>
        <TouchableHighlight
          style={styles.registerBtn}
          onPress={onPress}
          underlayColor={'#FDD758'}
        >
          <Text style={{ fontSize: 30, fontFamily: 'Gamja-Flower-Regular' }}>
            {title}
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}
