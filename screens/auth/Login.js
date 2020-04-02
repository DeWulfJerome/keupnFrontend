import React, {useState, useEffect} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';

import StyleConstants, {deviceWidth} from '../../StyleConstants';

import Button from '../../components/buttons/Button';
import InputText from '../../components/inputs/InputText';

const Login = () => {
  return (
    <View style={styles.pageStyle}>
      <ScrollView contentContainerStyle={styles.scrollViewStyle}>
        <InputText label="username"></InputText>
        <InputText label="password"></InputText>
        <Button
          disabled={true}
          text="Login"
          onPress={() => {
            console.log('logging');
          }}></Button>
      </ScrollView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  pageStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'black',
    paddingLeft: deviceWidth * 0.05,
    paddingRight: deviceWidth * 0.05,
  },
  scrollViewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: deviceWidth * 0.9,
  },
});
