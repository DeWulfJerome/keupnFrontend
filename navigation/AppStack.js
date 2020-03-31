import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import AuthLoading from '../screens/auth/AuthLoading';
import Temp from '../screens/auth/Temp';

const AuthStack = createStackNavigator();

const AppContainer = () => {
  return (
    <NavigationContainer>
      <AuthStack.Navigator initialRouteName="AuthLoading">
        <AuthStack.Screen
          name="AuthLoading"
          component={AuthLoading}
          options={{title: 'Loading'}}
        />
        <AuthStack.Screen name="Temp" component={Temp}></AuthStack.Screen>
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;
