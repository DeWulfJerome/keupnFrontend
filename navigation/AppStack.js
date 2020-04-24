import * as React from 'react';
import {useEffect} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSelector} from 'react-redux';

//Stacks
import LoginStackContainer from './auth/LoginStackContainer';
import BarterStackContainer from './app/BarterStackContainer';
import ProfileStackContainer from './app/ProfileStackContainer';

import TabBar from './TabBar';

const Tab = createBottomTabNavigator();

const AppContainer = () => {
  const loggedIn = useSelector(state => {
    return state.authReducer.auth.loggedIn;
  });

  if (loggedIn) {
    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Barter"
          tabBar={({state, descriptors, navigation}) => (
            <TabBar
              state={state}
              descriptors={descriptors}
              navigation={navigation}
            />
          )}>
          <Tab.Screen name="Settings" component={BarterStackContainer} />
          <Tab.Screen name="Barter" component={BarterStackContainer} />
          <Tab.Screen name="Trades" component={BarterStackContainer} />
          <Tab.Screen name="Profile" component={ProfileStackContainer} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <LoginStackContainer />
      </NavigationContainer>
    );
  }
};

export default AppContainer;
