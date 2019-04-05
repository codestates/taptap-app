import React, { Component } from 'react';
import { TouchableHighlight, Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  storeItemContainer: {
    width: '100%',
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    marginLeft: 20,
    marginRight: 20
  },
  button: {
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10
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
              fontSize: 30
            }}
          >
            {name}
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}
