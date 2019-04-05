import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import CouponsDisplay from './CouponsDisplay';

import Swiper from 'react-native-swiper';

const styles = StyleSheet.create({
  couponsView: {
    flex: 0.9,
    justifyContent: 'flex-start',
    // alignItems: 'center',
    marginTop: 100
  },
  storeName: {
    fontSize: 40,
    textAlign: 'center',
    fontFamily: 'Gamja-Flower-Regular'
  },
  couponsInfo: {
    textAlign: 'right',
    marginRight: 20,
    fontSize: 22,
    fontFamily: 'Gamja-Flower-Regular'
  }
});

export default class Coupons extends Component {
  _getCouponPages = (count, required) => {
    if (count <= required) {
      return [
        <CouponsDisplay key={'onePage'} count={count} required={required} />
      ];
    } else {
      let pageCount = Math.floor(count / required) + 1;
      const pages = [];
      for (i = 0; i < pageCount; i++) {
        if (i + 1 === pageCount) {
          //마지막 페이지
          pages.push(
            <CouponsDisplay
              key={`lastCouponPage${i}`}
              count={required - (required * pageCount - count)}
              required={required}
            />
          );
        } else {
          pages.push(
            <CouponsDisplay
              key={`comCouponPage${i}`}
              count={required}
              required={required}
            />
          );
        }
      }
      return pages;
    }
  };
  render() {
    const { _getCouponPages } = this;
    const { selectedStore } = this.props;
    const pages = _getCouponPages(
      selectedStore.get('count'),
      selectedStore.get('required')
    );
    return (
      <View style={styles.couponsView}>
        <Text style={styles.storeName}>{selectedStore.get('storeName')}</Text>
        <Text style={styles.couponsInfo}>
          <Text style={{ color: '#E34235', fontWeight: 'bold', fontSize: 30 }}>
            {selectedStore.get('count') + ' '}
          </Text>
          / {selectedStore.get('required')}
        </Text>
        <Swiper
          dot={
            <View
              style={{
                backgroundColor: 'rgba(0,0,0,.2)',
                width: 5,
                height: 5,
                borderRadius: 4,
                marginLeft: 3,
                marginRight: 3,
                marginTop: 3,
                marginBottom: 3
              }}
            />
          }
          activeDot={
            <View
              style={{
                backgroundColor: 'black',
                width: 8,
                height: 8,
                borderRadius: 4,
                marginLeft: 3,
                marginRight: 3,
                marginTop: 3,
                marginBottom: 3
              }}
            />
          }
        >
          {pages}
        </Swiper>
      </View>
    );
  }
}
