import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Map, List } from 'immutable';
import utils from '../utils';
import Stores from '../components/Stores';
import Coupons from '../components/Coupons';

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  noCouponContainer: {
    flex: 1,
    alignItems: 'center',
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
      visitedStores: List([]),
      isNewMember: false
    };

    this._init();
  }
  _init = async () => {
    const { id } = this.props.navigation.state.params;
    const customerID = id;
    const visitedStores = await utils.fetchPostData(
      '/apps/coupons/get-visited-stores',
      {
        customerID: customerID
      }
    );
    if (visitedStores.length === 0) {
      this.setState({
        isNewMember: true
      });
    } else {
      const { selectedStore } = this.state;
      //처음 등록한 사람 처리 : visitedStores가 비어있음
      const lastVisitedStore = visitedStores.shift();
      let state = selectedStore.set('id', lastVisitedStore.storeID);
      state = state.set('storeName', lastVisitedStore.name);
      visitedStores.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
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
    }
  };

  _fetchGetCouponsAndStoresList = async storeID => {
    const { id } = this.props.navigation.state.params;
    const customerID = id;
    const visitedStores = await utils.fetchPostData(
      '/apps/coupons/get-visited-stores',
      {
        customerID: customerID
      }
    );
    const { selectedStore } = this.state;
    let selectedIndex = 0;
    visitedStores.forEach((val, idx) => {
      if (val.storeID === storeID) {
        selectedIndex = idx;
      }
    });

    const selectedvisitedStore = visitedStores.splice(selectedIndex, 1)[0];

    visitedStores.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    this.setState({
      visitedStores: List(visitedStores)
    });

    let state = selectedStore.set('id', selectedvisitedStore.storeID);
    state = state.set('storeName', selectedvisitedStore.name);

    const couponCount = await utils.fetchPostData(
      '/apps/coupons/get-coupons-count',
      {
        customerID: customerID,
        storeID: storeID
      }
    );

    const json = await utils.fetchPostData('/apps/rewards/get-required-count', {
      storeID: storeID
    });

    state = state
      .set('count', couponCount.count)
      .set('required', json.required);

    this.setState({
      selectedStore: state
    });
  };

  _handleOnPressStoreName = storeID => {
    this._fetchGetCouponsAndStoresList(storeID);
  };

  render() {
    const { selectedStore, visitedStores, isNewMember } = this.state;
    const { id } = this.props.navigation.state.params;
    const { _handleOnPressStoreName } = this;
    return (
      <View style={styles.container}>
        {isNewMember ? (
          <View style={styles.noCouponContainer}>
            <Text style={{ fontSize: 50 }}>쿠폰이 없습니다.</Text>
          </View>
        ) : (
          <View style={styles.container}>
            <Coupons
              style={styles.coupon}
              selectedStore={selectedStore}
              customerID={id}
            />
            <Stores
              style={styles.stores}
              visitedStores={visitedStores}
              onPress={_handleOnPressStoreName}
            />
          </View>
        )}
      </View>
    );
  }
}
