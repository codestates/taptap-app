import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: 'red',
    width: 200
  }
});
export default class StoreItem extends Component {
  render() {
    const { id, name, onPress } = this.props;
    return (
      <Text style={styles.container} onPress={() => onPress(id)}>
        {' '}
        {name}{' '}
      </Text>
    );
  }
}
