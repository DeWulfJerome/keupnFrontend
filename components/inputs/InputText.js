import React, {useState, useEffect, useLayoutEffect, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Animated,
  Easing,
  TouchableOpacity,
} from 'react-native';

import StyleConstants, {deviceWidth} from '../../StyleConstants';

/**
 *
 * @param {string} loadingState An enum: can be "loading", "error", "success", or "default"
 */
const InputText = ({label, value, onChangeText, type, loadingState, theme}) => {
  const inputType = type ? type : 'text';
  const [focussed, setFocussed] = useState(false);
  const labelAnim = useRef(new Animated.Value(0)).current;
  const colorAnim = useRef(new Animated.Value(0)).current;
  const opacAnim = useRef(new Animated.Value(0)).current;

  const onchangeInputText = text => {
    setInputText(text);
  };

  useEffect(() => {
    if (focussed) {
      animateLabel(1);
      animateLabelOpacity(1);
      animateLabelColor(1);
    } else {
      if (!value) {
        animateLabel(0);
      }
      animateLabelOpacity(0);
      animateLabelColor(0);
    }
  }, [focussed]);

  const loadingAnim = useRef(new Animated.Value(1)).current;

  const animateLoading = Animated.loop(
    Animated.sequence([
      Animated.timing(loadingAnim, {
        toValue: 0,
        duration: 500,
        delay: 300,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
      Animated.timing(loadingAnim, {
        toValue: 2,
        duration: 0,
        useNativeDriver: true,
      }),
      Animated.timing(loadingAnim, {
        toValue: 1,
        duration: 500,
        delay: 100,
        easing: Easing.ease,
        useNativeDriver: true,
      }),
    ]),
  );

  useEffect(() => {
    loadingAnim.setValue(1);
    switch (loadingState) {
      case 'loading':
        animateLoading.start();
        break;
    }
    return () => {
      switch (loadingState) {
        case 'loading':
          animateLoading.stop();
          break;
      }
    };
  }, [loadingState]);

  const determineStateMachine = state => {
    switch (state) {
      case 'default':
        return {opacity: labelOpacAnim, backgroundColor: labelColorAnim};

      case 'error':
        return {opacity: 1, backgroundColor: StyleConstants.colors.red.medium};

      case 'success':
        return {
          opacity: 1,
          backgroundColor: StyleConstants.colors.green.medium,
        };

      case 'loading':
        return {
          opacity: loadingOpacAnim,
          backgroundColor: loadingColorAnim,
          width: loadingWidthAnim,
          transform: [{translateX: loadingTransAnim}],
        };
      default:
        return {opacity: labelOpacAnim, backgroundColor: labelColorAnim};
    }
  };

  // Animations
  const animateLabel = direction => {
    Animated.timing(labelAnim, {
      toValue: direction,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const animateLabelOpacity = val => {
    Animated.timing(opacAnim, {
      toValue: val,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const animateLabelColor = direction => {
    Animated.timing(colorAnim, {
      toValue: direction,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const loadingOpacAnim = loadingAnim.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0.4, 1, 0.4],
    extrapolate: 'clamp',
  });
  const loadingColorAnim = StyleConstants.colors.blue.medium;
  const loadingWidthAnim = '100%';
  const loadingTransAnim = loadingAnim.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [-deviceWidth, 0, deviceWidth],
    extrapolate: 'clamp',
  });

  const labelOpacAnim = opacAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0.6, 1],
  });

  const transAnim = labelAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [20, 0],
  });

  const labelColorAnim = colorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [
      theme === 'light'
        ? StyleConstants.colors.black.fontBlack
        : StyleConstants.colors.white.medium,
      StyleConstants.colors.blue.medium,
    ],
  });

  return (
    <View style={styles.inputWrapper}>
      <Animated.Text
        style={[
          styles.labelStyle,
          theme === 'light' && styles.lightLabelStyle,
          {
            opacity: labelOpacAnim,
            transform: [{translateX: transAnim}, {translateY: transAnim}],
            color: labelColorAnim,
          },
        ]}>
        {label}
      </Animated.Text>
      <TextInput
        value={value}
        autoCompleteType="off"
        allowFontScaling={false}
        keyboardType={
          inputType === 'number'
            ? 'numeric'
            : inputType === 'email'
            ? 'email-address'
            : 'default'
        }
        autoCapitalize={
          inputType === 'password' || inputType === 'email'
            ? 'none'
            : 'sentences'
        }
        selectionColor={StyleConstants.colors.blue.medium}
        secureTextEntry={inputType === 'password' ? true : false}
        style={[styles.input, theme === 'light' && styles.lightInput]}
        onBlur={() => {
          setFocussed(false);
        }}
        onFocus={() => {
          setFocussed(true);
        }}
        onChangeText={onChangeText}></TextInput>
      <View style={styles.underLineContainer}>
        <Animated.View
          style={[
            styles.underLineFilled,
            determineStateMachine(loadingState),
          ]}></Animated.View>
      </View>
    </View>
  );
};

export default InputText;

const styles = StyleSheet.create({
  inputWrapper: {
    marginBottom: StyleConstants.padding.medium,
    width: '100%',
    height: 60,
    position: 'relative',
  },
  labelStyle: {
    color: '#fff',
    opacity: 0.6,
    fontSize: StyleConstants.font.sizes.medium,
    transform: [{translateY: 20}, {translateX: 20}],
  },
  lightLabelStyle: {
    color: StyleConstants.colors.black.fontBlack,
  },
  input: {
    color: '#fff',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 999,
  },
  lightInput: {
    color: StyleConstants.colors.black.fontBlack,
  },
  underLineContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    overflow: 'hidden',
  },
  underLineFilled: {
    height: 2,
  },
});
