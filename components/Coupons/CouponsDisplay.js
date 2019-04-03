import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

export default class CouponsDisplay extends Component {
  render() {
    const { count, required } = this.props;
    const coupons = [];
    for (let i = 0; i < count; i++) {
      coupons.push(
        <Image
          key={`checked${i}`}
          style={{ width: 50, height: 50 }}
          source={{
            uri: 'https://img.icons8.com/ios/100/000000/warranty-filled.png'
          }}
        />
      );
    }
    for (let i = 0; i < required - count; i++) {
      coupons.push(
        <Image
          key={`unchecked${i}`}
          style={{ width: 50, height: 50 }}
          source={{
            uri: 'https://img.icons8.com/ios/100/000000/warranty.png'
          }}
        />
      );
    }
    return (
      <View
        style={{
          flexDirection: 'row'
        }}
      >
        {coupons.map(img => img)}
      </View>
    );
  }
}
