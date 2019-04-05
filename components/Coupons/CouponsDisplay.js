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
    width: '100%',
    paddingTop: 20
  },
  couponImg: {
    width: 70,
    height: 70
  }
});
export default class CouponsDisplay extends Component {
  _getImageSize = required => {
    let size = 600 / required - 2 < 50 ? 50 : 600 / required - 2;
    if (size > 70) {
      size = 70;
    }
    return size;
  };
  render() {
    const { _getImageSize } = this;
    const { count, required } = this.props;
    const coupons = [];
    const size = _getImageSize(required);

    if (size !== null) {
      for (let i = 0; i < count; i++) {
        coupons.push(
          <Image
            style={styles.couponImg}
            key={`checked${i}`}
            source={require('../../assets/checked.png')}
          />
        );
      }
      for (let i = 0; i < required - count; i++) {
        coupons.push(
          <Image
            style={styles.couponImg}
            key={`unchecked${i}`}
            source={require('../../assets/unchecked.png')}
          />
        );
      }
    }
    return (
      <View style={styles.couponsContainer}>{coupons.map(img => img)}</View>
    );
  }
}
