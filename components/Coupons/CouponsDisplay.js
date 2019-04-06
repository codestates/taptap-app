import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  couponsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#F2F2F2',
    justifyContent: 'center',
    alignSelf: 'center',
    height: 180,
    width: '90%',
    paddingTop: 20,
    borderRadius: 10
  }
});
export default class CouponsDisplay extends Component {
  render() {
    const { count, required } = this.props;
    const coupons = [];

    for (let i = 0; i < count; i++) {
      coupons.push(
        <Image
          style={{ width: 70, height: 70 }}
          key={`checked${i}`}
          source={require('../../assets/checked.png')}
        />
      );
    }
    for (let i = 0; i < required - count; i++) {
      coupons.push(
        <Image
          style={{ width: 70, height: 70 }}
          key={`unchecked${i}`}
          source={require('../../assets/unchecked.png')}
        />
      );
    }
    return (
      <View style={styles.couponsContainer}>{coupons.map(img => img)}</View>
    );
  }
}
