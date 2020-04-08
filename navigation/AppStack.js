import * as React from 'react';
import {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';

//Stacks
import LoginStackContainer from './auth/LoginStackContainer';
import BarterStackContainer from './app/BarterStackContainer';

const AuthStack = createStackNavigator();

const AppContainer = () => {
  const loggedIn = useSelector(state => {
    return state.authReducer.auth.loggedIn;
  });

  if (loggedIn) {
    return (
      <NavigationContainer>
        {/* <LoginStackContainer /> */}
        <BarterStackContainer />
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <LoginStackContainer />
        {/* <BarterStackContainer /> */}
      </NavigationContainer>
    );
  }
};

export default AppContainer;
