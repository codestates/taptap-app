import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const styles = StyleSheet.create({
  couponsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#F2F2F2',
    justifyContent: 'center',
    height: 180,
    width: '90%',
    paddingTop: 20
  }
});
export default class CouponsDisplay extends Component {
  render() {
    const { count, required } = this.props;
    const coupons = [];
    for (let i = 0; i < count; i++) {
      coupons.push(
        // <Image
        //   key={`checked${i}`}
        //   style={{ width: 70, height: 70 }}
        //   source={{
        //     uri: 'https://img.icons8.com/ios/100/000000/warranty-filled.png'
        //   }}
        // />
        <AntDesign key={`checked${i}`} name={'star'} size={70} />
      );
    }
    for (let i = 0; i < required - count; i++) {
      coupons.push(
        // <Image
        //   key={`unchecked${i}`}
        //   style={{ width: 70, height: 70 }}
        //   source={{
        //     uri: 'https://img.icons8.com/ios/100/000000/warranty.png'
        //   }}
        // />
        <AntDesign key={`unchecked${i}`} name={'staro'} size={70} />
      );
    }
    return (
      <View style={styles.couponsContainer}>{coupons.map(img => img)}</View>
    );
  }
}
