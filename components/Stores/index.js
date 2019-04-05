import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import StoreItem from './StoreItem';

const styles = StyleSheet.create({
  storeView: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    marginTop: 20,
    marginRight: 20,
    marginBottom: 20,
    marginLeft: 20
  }
});
export default class Stores extends Component {
  render() {
    const { visitedStores, onPress } = this.props;
    return (
      <View style={styles.storeView}>
        {visitedStores.map((store, idx) => {
          return (
            <StoreItem
              id={store.storeID}
              name={store.name}
              key={idx}
              onPress={onPress}
            />
          );
        })}
      </View>
    );
  }
}
