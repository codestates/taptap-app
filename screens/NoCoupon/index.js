import React, { Component } from 'react';
import { Text, View, ImageBackground, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  noCouponContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'hsl(45, 98%, 65%)'
  },
  noCouponTextView: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default class index extends Component {
  render() {
    return (
      <ImageBackground
        style={styles.noCouponContainer}
        source={require('../../assets/noCouponView.png')}
      >
        <View style={styles.noCouponTextView}>
          <Text
            style={{
              fontFamily: 'Gamja-Flower-Regular',
              fontSize: 50,
              marginTop: 70,
              marginBottom: 20
            }}
          >
            환영합니다!!
          </Text>
          <Text style={{ fontFamily: 'Gamja-Flower-Regular', fontSize: 20 }}>
            꾹꾹이 가맹점에서 쿠폰을 적립해보세요.😆
          </Text>
        </View>
      </ImageBackground>
    );
  }
}
