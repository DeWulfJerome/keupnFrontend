import React, {useState, useEffect, useRef, useLayoutEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Animated,
  Easing,
  TouchableOpacity,
} from 'react-native';

import StyleConstants from '../../StyleConstants';

const InputText = ({label}) => {
  const [inputText, setInputText] = useState('');
  const [lineWidth, setLineWidth] = useState(0);
  const [focussed, setFocussed] = useState(false);
  const [labelAnim, setLabelAnim] = useState(new Animated.Value(0));

  const inputRef = useRef(null);

  const onchangeInputText = text => {
    setInputText(text);
  };

  useEffect(() => {
    if (focussed) {
      animateLabel(1);
    } else {
      animateLabel(0);
    }
  }, [focussed]);

  useLayoutEffect(() => {
    console.log(lineWidth);
  }, [lineWidth]);

  const animateLabel = direction => {
    Animated.timing(labelAnim, {
      toValue: direction,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const opacAnim = labelAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0.8, 0.4],
  });

  const transAnim = labelAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [20, 0],
  });

  return (
    <TouchableOpacity
      style={styles.inputWrapper}
      onPress={() => {
        inputRef.current.focus();
        setFocussed(true);
      }}>
      <Animated.Text
        style={[
          styles.labelStyle,
          {
            opacity: opacAnim,
            transform: [{translateX: transAnim}, {translateY: transAnim}],
          },
        ]}>
        {label}
      </Animated.Text>
      <TextInput
        ref={inputRef}
        value={inputText}
        style={styles.input}
        onBlur={() => {
          setFocussed(false);
        }}
        onFocus={() => {
          setFocussed(true);
        }}
        onChangeText={onchangeInputText}></TextInput>
      <View
        style={styles.underLineContainer}
        onLayout={e => {
          setLineWidth(e.nativeEvent.layout.width);
        }}>
        <View style={styles.underLineFilled}></View>
      </View>
    </TouchableOpacity>
  );
};

export default InputText;

const styles = StyleSheet.create({
  inputWrapper: {
    marginBottom: StyleConstants.padding.medium,
    width: '100%',
    height: 60,
    // backgroundColor: 'grey',
    position: 'relative',
  },
  labelStyle: {
    color: '#fff',
    opacity: 0.8,
    fontSize: StyleConstants.font.sizes.medium,
    transform: [{translateY: 20}, {translateX: 20}],
  },
  input: {
    color: '#fff',
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  underLineContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  underLineFilled: {
    height: 2,
    backgroundColor: StyleConstants.colors.blue.medium,
  },
});
