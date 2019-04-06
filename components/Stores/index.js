import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import StoreItem from './StoreItem';

const styles = StyleSheet.create({
  storeView: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    marginTop: 10,
    marginRight: 20,
    marginBottom: 20,
    marginLeft: 20,
    borderRadius: 10
  }
});
export default class Stores extends Component {
  render() {
    const { visitedStores, onPress } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <Text
          style={{
            textAlign: 'center',
            fontFamily: 'Gamja-Flower-Regular',
            fontSize: 26
          }}
        >
          쿠폰이 있는 매장 목록
        </Text>
        <ScrollView style={styles.storeView}>
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
        </ScrollView>
      </View>
    );
  }
}
