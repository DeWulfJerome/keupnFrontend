import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity,
} from 'react-native';
import {useDispatch} from 'react-redux';

// services
import AuthService from '../../services/AuthService';

// style
import StyleConstants, {deviceWidth} from '../../StyleConstants';

// layout
import AuthBackground from '../../views/auth/AuthBackground';

// components
import Button from '../../components/buttons/Button';
import InputText from '../../components/inputs/InputText';
import Logo from '../../components/assets/Logo';

const Login = props => {
  const [loadingState, setLoadingState] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const authService = new AuthService();

  const dispatch = useDispatch();

  const toNextPage = () => {
    if (!loadingState) {
      setLoadingState('loading');
      authService
        .logIn(username, password, dispatch)
        .then(() => {
          setLoadingState('');
        })
        .catch(() => {
          setLoadingState('');
          alert('somting wong');
        });
    }
  };

  return (
    <AuthBackground>
      <Logo />
      <ScrollView
        contentContainerStyle={styles.scrollViewStyle}
        keyboardShouldPersistTaps="handled">
        <InputText
          label="username"
          loadingState={loadingState}
          value={username}
          onChangeText={text => {
            setUsername(text);
          }}
        />
        <InputText
          label="password"
          type="password"
          loadingState={loadingState}
          value={password}
          onChangeText={text => {
            setPassword(text);
          }}
        />
        <Button disabled={!username} text="Continue" onPress={toNextPage} />
      </ScrollView>
      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>First time? </Text>
        <TouchableOpacity
          style={styles.signupBtn}
          onPress={() => {
            props.navigation.navigate('signup');
          }}>
          <Text style={[styles.signupText, styles.signupBtnText]}>
            Create your account
          </Text>
        </TouchableOpacity>
      </View>
    </AuthBackground>
  );
};

export default Login;

const styles = StyleSheet.create({
  scrollViewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: deviceWidth * 0.9,
  },
  signupContainer: {
    flexDirection: 'row',
    marginBottom: StyleConstants.padding.medium,
  },
  signupText: {
    color: StyleConstants.colors.white.medium,
    fontSize: StyleConstants.font.sizes.medium,
    fontWeight: StyleConstants.font.weight.regular,
  },
  signupBtnText: {
    fontWeight: StyleConstants.font.weight.bold,
    color: StyleConstants.colors.blue.medium,
  },
});
