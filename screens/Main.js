import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Map, List } from 'immutable';
import utils from '../utils';
import Stores from '../components/Stores';
import Coupons from '../components/Coupons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
});

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStore: Map({
        id: -1,
        storeName: '',
        count: -1,
        required: -1
      }),
      visitedStores: List([])
    };
    const { id } = this.props.navigation.state.params;
    const customerID = id;

    (async () => {
      const visitedStores = await utils.fetchPostData(
        '/apps/coupons/get-visited-stores',
        {
          customerID: customerID
        }
      );

      const { selectedStore } = this.state;
      //처음 등록한 사람 처리 : visitedStores가 비어있음
      const lastVisitedStore = visitedStores.shift();
      let state = selectedStore.set('id', lastVisitedStore.storeID);
      state = state.set('storeName', lastVisitedStore.name);

      this.setState({
        visitedStores: List(visitedStores)
      });

      const couponCount = await utils.fetchPostData(
        '/apps/coupons/get-coupons-count',
        {
          customerID: customerID,
          storeID: lastVisitedStore.storeID
        }
      );
      const json = await utils.fetchPostData(
        '/apps/rewards/get-required-count',
        {
          storeID: lastVisitedStore.storeID
        }
      );
      state = state
        .set('count', couponCount.count)
        .set('required', json.required);
      this.setState({
        selectedStore: state
      });
    })();
  }

  render() {
    const { selectedStore, visitedStores } = this.state;
    const { id } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <Coupons
          style={styles.coupon}
          selectedStore={selectedStore}
          customerID={id}
        />
        <Stores style={styles.stores} visitedStores={visitedStores} />
      </View>
    );
  }
}
