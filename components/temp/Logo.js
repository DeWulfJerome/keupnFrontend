import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import StyleConstants from '../../StyleConstants';

const Logo = () => {
  return (
    <View style={styles.logoContainer}>
      <View style={styles.logo}></View>
      <Text style={styles.logoText}>Our Logo</Text>
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  logoContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: StyleConstants.padding.medium,
  },
  logo: {
    backgroundColor: StyleConstants.colors.blue.medium,
    height: 60,
    width: 60,
  },
  logoText: {
    color: StyleConstants.colors.white.medium,
    fontSize: StyleConstants.font.sizes.large,
    marginTop: StyleConstants.padding.medium,
  },
});
