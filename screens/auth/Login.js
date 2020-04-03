import React, {useState, useEffect} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';

import StyleConstants, {deviceWidth} from '../../StyleConstants';

import Button from '../../components/buttons/Button';
import InputText from '../../components/inputs/InputText';

const Login = () => {
  const [loadingState, setLoadingState] = useState('');
  const [username, setUsername] = useState('');
  return (
    <View style={styles.pageStyle}>
      <ScrollView
        contentContainerStyle={styles.scrollViewStyle}
        keyboardShouldPersistTaps="handled">
        <InputText
          label="username"
          loadingState={loadingState}
          value={username}
          onChangeText={text => {
            setUsername(text);
          }}></InputText>
        <Button
          disabled={!username}
          text="Continue"
          onPress={() => {
            if (loadingState) {
              setLoadingState('');
            } else {
              setLoadingState('loading');
            }
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
