import React, { Component } from 'react';
import { TouchableHighlight, Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  storeItemContainer: {
    width: '100%',
    borderRadius: 10
  },
  button: {
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
    borderBottomColor: '#bbbbbb',
    borderBottomWidth: 1
  }
});
export default class StoreItem extends Component {
  render() {
    const { id, name, onPress } = this.props;
    return (
      <View style={styles.storeItemContainer}>
        <TouchableHighlight
          style={styles.button}
          onPress={() => onPress(id)}
          underlayColor={'#FDC20E'}
        >
          <Text
            style={{
              fontSize: 35,
              fontFamily: 'Gamja-Flower-Regular'
            }}
          >
            {name}
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}
