import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import StyleConstants, {deviceWidth} from '../../StyleConstants';

const CardTextOverlay = ({imgUrl, children}) => {
  return (
    <View style={styles.cardContainer}>
      <Image
        source={{uri: imgUrl}}
        resizeMode="cover"
        style={styles.backgroundImage}
      />
      <View style={styles.backgroundOverlay} />
      <View style={styles.contentContainer}>{children}</View>
    </View>
  );
};

export default CardTextOverlay;

const styles = StyleSheet.create({
  cardContainer: {
    position: 'relative',
    width: deviceWidth * 0.35,
    height: deviceWidth * 0.25,
    borderRadius: StyleConstants.border.radius.medium,
    overflow: 'hidden',
    padding: StyleConstants.padding.medium,
  },
  backgroundImage: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    width: deviceWidth * 0.35,
    height: deviceWidth * 0.25,
    borderRadius: StyleConstants.border.radius.medium,
    zIndex: -2,
  },
  backgroundOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    zIndex: -1,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
  },
});
