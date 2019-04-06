import React, { Component } from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';
import CouponsDisplay from './CouponsDisplay';

import Swiper from 'react-native-swiper';
import SpinnerButton from 'react-native-spinner-button';

const styles = StyleSheet.create({
  couponsView: {
    flex: 0.9,
    justifyContent: 'flex-start',
    // alignItems: 'center',
    marginTop: 80
  },
  storeName: {
    fontSize: 40,
    width: '100%',
    textAlign: 'center',
    fontFamily: 'Gamja-Flower-Regular'
  },
  couponsInfo: {
    textAlign: 'right',
    marginRight: 30,
    marginTop: 20,
    fontSize: 22,
    fontFamily: 'Gamja-Flower-Regular'
  },
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    backgroundColor: '#F2F2F2',
    paddingTop: 25,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 20,
    marginLeft: 45,
    marginRight: 45
  }
});

export default class Coupons extends Component {
  state = {
    defaultLoading: false
  };
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
  _onPressStoreName = () => {
    this.setState({
      defaultLoading: true
    });
  };
  render() {
    const { _getCouponPages, _onPressStoreName } = this;
    const { defaultLoading } = this.state;
    const { selectedStore, onPress } = this.props;
    const pages = _getCouponPages(
      selectedStore.get('count'),
      selectedStore.get('required')
    );
    return (
      <View style={styles.couponsView}>
        <View
          style={{
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <SpinnerButton
            spinnerType={'UIActivityIndicator'}
            buttonStyle={styles.buttonStyle}
            isLoading={defaultLoading}
            onPress={() => {
              this.setState({
                defaultLoading: true
              });
              onPress(selectedStore.get('id'));
              // fetch와 동기화 필요한 부분 ======================
              setTimeout(() => {
                this.setState({
                  defaultLoading: false
                });
              }, 1000);
            }}
            indicatorCount={10}
          >
            <View
              style={{
                flexDirection: 'row',
                paddingLeft: 20,
                paddingRight: 20
              }}
            >
              <Text style={styles.storeName}>
                {selectedStore.get('storeName')}
              </Text>
              <Image
                style={{ width: 40, height: 40 }}
                source={require('../../assets/refresh.png')}
              />
            </View>
          </SpinnerButton>
        </View>
        <Text style={styles.couponsInfo}>
          <Text style={{ color: '#E34235', fontWeight: 'bold', fontSize: 40 }}>
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
