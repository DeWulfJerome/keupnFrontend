import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import AuthLoading from '../screens/auth/AuthLoading';
import Login from '../screens/auth/Login';
//Stacks
import LoginStackContainer from './auth/LoginStackContainer';

const AuthStack = createStackNavigator();

const AppContainer = () => {
  return (
    <NavigationContainer>
      <LoginStackContainer></LoginStackContainer>
    </NavigationContainer>
  );
};

export default AppContainer;
