import {
  createSwitchNavigator,
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
  createStackNavigator,
  createAppContainer
} from 'react-navigation';

import AuthLoading from './AuthLoading';
import Auth from './Auth';
import Main from './Main';

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading,
      Auth,
      Main
    },
    {
      initialRouteName: 'AuthLoading'
    }
  )
);
