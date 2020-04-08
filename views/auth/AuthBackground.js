import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

// style
import {deviceWidth} from '../../StyleConstants';

const AuthBackground = props => {
  return <View style={styles.pageStyle}>{props.children}</View>;
};

export default AuthBackground;

const styles = StyleSheet.create({
  pageStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'black',
    paddingLeft: deviceWidth * 0.05,
    paddingRight: deviceWidth * 0.05,
  },
});
