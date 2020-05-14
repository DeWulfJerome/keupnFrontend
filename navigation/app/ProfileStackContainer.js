import React from 'react';
import Profile from '../../screens/app/profile/Profile';

import {createStackNavigator} from '@react-navigation/stack';

const ProfileStack = createStackNavigator();

const ProfileStackContainer = () => {
  return (
    <ProfileStack.Navigator initialRouteName="profile">
      <ProfileStack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
    </ProfileStack.Navigator>
  );
};

export default ProfileStackContainer;
