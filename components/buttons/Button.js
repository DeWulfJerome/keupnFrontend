import React, {useEffect, useRef} from 'react';
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
  Text,
  View,
  StyleSheet,
  Animated,
} from 'react-native';

import StyleConstants from '../../StyleConstants';

const Button = props => {
  const pressAnim = useRef(new Animated.Value(0)).current;

  const animateButtonPress = direction => {
    Animated.timing(pressAnim, {
      toValue: direction,
      duration: 100,
      useNativeDriver: false,
    }).start();
  };

  const scale = pressAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.97],
    extrapolate: 'clamp',
  });

  const opac = pressAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.65],
    extrapolate: 'clamp',
  });

  return (
    <TouchableWithoutFeedback
      style={[buttonStyle.buttonOuterWrapper]}
      disabled={props.disabled && props.disabled}
      onPressIn={() => {
        animateButtonPress(1);
      }}
      onPressOut={() => {
        animateButtonPress(0);
      }}
      onPress={() => {
        props.onPress();
      }}>
      <Animated.View
        style={[
          buttonStyle.buttonWrapper,
          props.disabled && buttonStyle.disabledWrapper,
          {transform: [{scale: scale}], opacity: opac},
        ]}>
        <Text style={buttonStyle.textStyle}>{props.text}</Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const buttonStyle = StyleSheet.create({
  buttonOuterWrapper: {
    width: '100%',
  },
  buttonWrapper: {
    backgroundColor: StyleConstants.colors.blue.medium,
    justifyContent: 'center',
    alignItems: 'center',
    padding: StyleConstants.padding.medium,
    width: '100%',
    borderRadius: StyleConstants.border.radius.medium,
  },
  disabledWrapper: {
    backgroundColor: 'rgba(242,242,242,0.2)',
  },
  textStyle: {
    color: StyleConstants.colors.white.medium,
    fontSize: StyleConstants.font.sizes.medium,
    fontWeight: StyleConstants.font.weight.bold,
  },
});

export default Button;
