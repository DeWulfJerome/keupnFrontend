import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Button from '../../components/buttons/Button';

const AuthLoading = ({navigation}) => {
  useEffect(() => {
    if (true) {
      navigation.navigate('Login');
    }
  }, []);
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <Text>Test</Text>
      <Button
        text="Navigate"
        onPress={() => {
          navigation.navigate('Login');
        }}></Button>
    </View>
  );
};

export default AuthLoading;
