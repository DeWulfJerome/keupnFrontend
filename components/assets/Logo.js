import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import StyleConstants from '../../StyleConstants';

const Logo = () => {
  return (
    <View style={styles.logoContainer}>
      <Image
        source={require('../../assets/logo/keupn.png')}
        style={styles.logo}
      />
      <Text style={styles.logoText}>Barter</Text>
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
    height: 60,
    width: 60,
  },
  logoText: {
    color: StyleConstants.colors.white.medium,
    fontSize: StyleConstants.font.sizes.large,
    marginTop: StyleConstants.padding.small,
  },
});
