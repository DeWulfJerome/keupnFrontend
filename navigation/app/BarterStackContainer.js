import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Barter from '../../screens/app/barter/Barter';

const BarterStack = createStackNavigator();

const BarterStackContainer = () => (
  <BarterStack.Navigator initialRouteName="barter">
    <BarterStack.Screen name="barter" component={Barter} />
  </BarterStack.Navigator>
);

export default BarterStackContainer;
