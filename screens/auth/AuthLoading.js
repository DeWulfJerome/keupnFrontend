import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const AuthLoading = ({navigation}) => {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <Text>Test</Text>
      <TouchableOpacity
        style={{padding: 10, backgroundColor: 'orange', margin: 10}}
        onPress={() => {
          navigation.navigate('Temp');
        }}>
        <Text>Navigate</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AuthLoading;
