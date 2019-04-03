import React, { Component } from 'react';
import { Text, View } from 'react-native';
import CouponsDisplay from './CouponsDisplay';
export default class Coupons extends Component {
  render() {
    const { selectedStore } = this.props;
    return (
      <View>
        <Text>{selectedStore.get('storeName')}</Text>
        <CouponsDisplay
          count={selectedStore.get('count')}
          required={selectedStore.get('required')}
        />
      </View>
    );
  }
}
