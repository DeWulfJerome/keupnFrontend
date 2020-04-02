import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

import StyleConstants from '../../StyleConstants';

const Button = props => {
  return (
    <TouchableOpacity
      style={[
        buttonStyle.buttonWrapper,
        props.disabled && buttonStyle.disabledWrapper,
      ]}
      disabled={props.disabled && props.disabled}
      onPress={() => {
        props.onPress();
      }}>
      <Text style={buttonStyle.textStyle}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const buttonStyle = StyleSheet.create({
  buttonWrapper: {
    backgroundColor: StyleConstants.colors.blue.medium,
    justifyContent: 'center',
    alignItems: 'center',
    padding: StyleConstants.padding.medium,
    width: '100%',
    borderRadius: StyleConstants.border.radius.medium,
  },
  disabledWrapper: {
    backgroundColor: StyleConstants.colors.grey.dark,
    opacity: 0.6,
  },
  textStyle: {
    color: StyleConstants.colors.white.medium,
    fontSize: StyleConstants.font.sizes.medium,
    fontWeight: StyleConstants.font.weight.bold,
  },
});

export default Button;
