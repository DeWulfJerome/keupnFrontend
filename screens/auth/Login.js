import React, {useState} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';

import StyleConstants, {deviceWidth} from '../../StyleConstants';

import Button from '../../components/buttons/Button';
import InputText from '../../components/inputs/InputText';

//temp
import Logo from '../../components/temp/Logo';

const Login = (props) => {
  const [loadingState, setLoadingState] = useState('');
  const [username, setUsername] = useState('myUsername');
  const [password, setPassword] = useState('testpassword');

  const toNextPage = () => {
    if (!loadingState) {
      setLoadingState('loading');
      setTimeout(() => {
        setLoadingState('');
        props.navigation.navigate('signup');
      }, 3000);
    }
  };

  return (
    <View style={styles.pageStyle}>
      <Logo></Logo>
      <ScrollView
        contentContainerStyle={styles.scrollViewStyle}
        keyboardShouldPersistTaps="handled">
        <InputText
          label="username"
          loadingState={loadingState}
          value={username}
          onChangeText={(text) => {
            setUsername(text);
          }}></InputText>
        <InputText
          label="password"
          type="password"
          loadingState={loadingState}
          value={password}
          onChangeText={(text) => {
            setPassword(text);
          }}></InputText>
        <Button
          disabled={!username}
          text="Continue"
          onPress={toNextPage}></Button>
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
