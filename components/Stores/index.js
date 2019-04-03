import React, { Component } from 'react';
import { View } from 'react-native';
import StoreItem from './StoreItem';

export default class Stores extends Component {
  render() {
    const { visitedStores, onPress } = this.props;
    return (
      <View>
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
