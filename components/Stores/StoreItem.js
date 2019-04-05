import React, { Component } from 'react';
import { TouchableHighlight, Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  storeItemContainer: {
    width: '100%',
    borderBottomColor: 'white',
    borderBottomWidth: 1
  },
  button: {
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#FDC20E'
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
          underlayColor={'#FDD758'}
        >
          <Text
            style={{
              fontSize: 30,
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
