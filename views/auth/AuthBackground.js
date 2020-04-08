import React from 'react';
import {StyleSheet, Text, View, ImageBackground, Image} from 'react-native';

// style
import {deviceWidth, deviceHeight} from '../../StyleConstants';

const AuthBackground = props => {
  return (
    <View style={styles.pageStyle}>
      <Image
        source={require('../../assets/backgrounds/authBackground.jpg')}
        style={styles.imageStyle}
      />
      {props.children}
    </View>
  );
};

export default AuthBackground;

const styles = StyleSheet.create({
  pageStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,

    backgroundColor: 'black',
    resizeMode: 'cover',
    paddingLeft: deviceWidth * 0.05,
    paddingRight: deviceWidth * 0.05,
  },
  imageStyle: {
    height: deviceHeight,
    width: deviceWidth,
    position: 'absolute',
    left: 0,
    top: 0,
  },
});
