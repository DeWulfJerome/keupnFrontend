import React, {useState, useRef} from 'react';
import {StyleSheet, View, ScrollView, Animated} from 'react-native';
import {useDispatch} from 'react-redux';

// style
import StyleConstants, {deviceWidth} from '../../StyleConstants';

// layout
import AuthBackground from '../../views/auth/AuthBackground';

// components
import Input from '../../components/inputs/InputText';
import Button from '../../components/buttons/Button';

// temp
import Logo from '../../components/temp/Logo';
import AuthService from '../../services/AuthService';

const Signup = props => {
  const authService = new AuthService();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    repassword: '',
    firstname: '',
    lastname: '',
    phone: '',
  });
  const [formStage, setFormStage] = useState(0);
  const [wrapperWidth, setWrapperWidth] = useState(0);
  const [loadingState, setLoadingState] = useState('');
  const [buttonText, setButtonText] = useState('Continue');
  const formStageAnim = useRef(new Animated.Value(formStage)).current;

  const dispatch = useDispatch();

  const updateFormdata = (text, formProp) => {
    setFormData({...formData, [formProp]: text});
  };

  const nextFormStage = async () => {
    setLoadingState('loading');
    switch (formStage) {
      case 0:
        try {
          await authService.checkUsernameUnique(formData.username);
          nextStage();
        } catch (err) {
          setLoadingState('error');
          console.log(err);
        }
        break;
      case 1:
        try {
          await authService.checkEmailUnique(formData.email);
          nextStage();
        } catch (err) {
          setLoadingState('error');
          console.log(err);
        }
        break;
      case 2:
        try {
          await authService.checkPasswordsMatch(
            formData.password,
            formData.repassword,
          );
          nextStage();
          setButtonText('Get started');
        } catch (err) {
          setLoadingState('error');
          console.log(err);
        }
        break;
      case 3:
        try {
          await authService.createAccount(FormData);
          try {
            authService.logIn(formData.username, formData.password, dispatch);
          } catch (err) {
            console.log(err);
            props.navigation.navigate('login');
          }
        } catch (err) {
          setLoadingState('error');
          console.log(err);
        }
        break;
    }

    function nextStage() {
      setLoadingState('');
      animateToStage(formStage + 0.5);
    }
  };

  const animateToStage = stage => {
    Animated.timing(formStageAnim, {
      toValue: stage,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(formStageAnim, {
        toValue: stage + 0.5,
        duration: 300,
        useNativeDriver: true,
      }).start();
    });
    setFormStage(stage + 0.5);
  };

  const stageTransform = formStageAnim.interpolate({
    inputRange: [0, 0.5, 1, 1.5, 2, 2.5, 3],
    outputRange: [
      -(0 * wrapperWidth),
      -(1 * wrapperWidth),
      -(2 * wrapperWidth),
      -(3 * wrapperWidth),
      -(4 * wrapperWidth),
      -(5 * wrapperWidth),
      -(6 * wrapperWidth),
    ],
    extrapolate: 'clamp',
  });

  const stageOpacity = formStageAnim.interpolate({
    inputRange: [0, 0.5, 1, 1.5, 2, 2.5, 3],
    outputRange: [1, 0, 1, 0, 1, 0, 1],
    extrapolate: 'clamp',
  });

  return (
    <AuthBackground>
      <Logo />
      <ScrollView
        contentContainerStyle={styles.scrollViewStyle}
        keyboardShouldPersistTaps="handled">
        <View style={styles.inputWrapperContainer}>
          <InputSlideWrapper
            setWrapperWidth={setWrapperWidth}
            stageTransform={stageTransform}
            stageOpacity={stageOpacity}>
            <Input
              label="username"
              loadingState={loadingState}
              value={formData.username}
              onChangeText={text => {
                updateFormdata(text, 'username');
              }}
            />
          </InputSlideWrapper>
          <InputSlideWrapper
            stageTransform={stageTransform}
            stageOpacity={stageOpacity}>
            <Input
              label="email"
              type="email"
              loadingState={loadingState}
              value={formData.email}
              onChangeText={text => {
                updateFormdata(text, 'email');
              }}
            />
          </InputSlideWrapper>
          <InputSlideWrapper
            stageTransform={stageTransform}
            stageOpacity={stageOpacity}>
            <Input
              label="password"
              type="password"
              loadingState={loadingState}
              value={formData.password}
              onChangeText={text => {
                updateFormdata(text, 'password');
              }}
            />
            <Input
              label="repeat password"
              type="password"
              loadingState={loadingState}
              value={formData.repassword}
              onChangeText={text => {
                updateFormdata(text, 'repassword');
              }}
            />
          </InputSlideWrapper>
          <InputSlideWrapper
            stageTransform={stageTransform}
            stageOpacity={stageOpacity}>
            <Input
              label="firstname"
              loadingState={loadingState}
              value={formData.firstname}
              onChangeText={text => {
                updateFormdata(text, 'firstname');
              }}
            />
            <Input
              label="lastname"
              loadingState={loadingState}
              value={formData.lastname}
              onChangeText={text => {
                updateFormdata(text, 'lastname');
              }}
            />
            <Input
              label="Phone"
              type="number"
              loadingState={loadingState}
              value={formData.phone}
              onChangeText={text => {
                updateFormdata(text, 'phone');
              }}
            />
          </InputSlideWrapper>
        </View>
        <Button text={buttonText} onPress={nextFormStage} />
      </ScrollView>
    </AuthBackground>
  );
};

const styles = StyleSheet.create({
  scrollViewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: deviceWidth * 0.9,
  },
  inputWrapperContainer: {
    alignSelf: 'stretch',
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  inputWrapper: {
    width: deviceWidth * 0.9,
  },
});

export default Signup;

const InputSlideWrapper = props => (
  <>
    <Animated.View
      onLayout={e => {
        if (props.setWrapperWidth) {
          props.setWrapperWidth(e.nativeEvent.layout.width);
        }
      }}
      style={[
        styles.inputWrapper,
        {
          transform: [{translateX: props.stageTransform}],
          opacity: props.stageOpacity,
        },
      ]}>
      {props.children}
    </Animated.View>
    <Animated.View
      style={[
        styles.inputWrapper,
        {
          transform: [{translateX: props.stageTransform}],
          opacity: props.stageOpacity,
        },
      ]}
    />
  </>
);
