import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../../screens/auth/Login';
import Signup from '../../screens/auth/Signup';

const LoginStack = createStackNavigator();

const LoginStackContainer = () => {
  return (
    <LoginStack.Navigator initialRouteName="login" headerMode="none">
      <LoginStack.Screen name="login" component={Login}></LoginStack.Screen>
      <LoginStack.Screen name="signup" component={Signup}></LoginStack.Screen>
    </LoginStack.Navigator>
  );
};

export default LoginStackContainer;
