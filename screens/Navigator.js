import { createSwitchNavigator, createAppContainer } from 'react-navigation';

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
