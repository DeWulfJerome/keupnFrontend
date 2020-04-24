import React from 'react';
import {View, Text} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';

const ProfileStack = createStackNavigator();

const Profile = () => (
  <View>
    <Text>ProfileScreen</Text>
  </View>
);

const ProfileStackContainer = () => {
  return (
    <ProfileStack.Navigator initialRouteName="profile">
      <ProfileStack.Screen name="Profile" component={Profile} />
    </ProfileStack.Navigator>
  );
};

export default ProfileStackContainer;
