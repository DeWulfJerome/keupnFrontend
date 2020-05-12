import React from 'react';
import {StyleSheet, Text, View, Image, Animated} from 'react-native';
import StyleConstants, {deviceWidth, deviceHeight} from '../../StyleConstants';
import {ScrollView} from 'react-native-gesture-handler';

const PageLayout = ({children, title, subTitle}) => {
  return (
    <View style={styles.pageContainer}>
      <Animated.View style={styles.pageHeaderContainer}>
        <Image
          source={require('../../assets/backgrounds/pageHeaderBackground.jpg')}
          style={styles.headerImage}
          resizeMode="stretch"
        />
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>{subTitle}</Text>
        </View>
      </Animated.View>

      <ScrollView
        style={styles.pageContentContainer}
        contentContainerStyle={{
          paddingBottom: StyleConstants.padding.navAvoider,
        }}>
        {children}
      </ScrollView>
    </View>
  );
};

export default PageLayout;

const styles = StyleSheet.create({
  pageContainer: {
    height: deviceHeight,
  },
  pageHeaderContainer: {
    position: 'relative',
    height: 150,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: StyleConstants.border.radius.large,
    marginBottom: -StyleConstants.border.radius.large,
  },
  headerImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: 150,
    width: '100%',
  },
  titleContainer: {
    width: deviceWidth * 0.9,
    justifyContent: 'flex-start',
  },
  title: {
    color: StyleConstants.colors.white.medium,
    fontSize: StyleConstants.font.sizes.large,
    fontWeight: StyleConstants.font.weight.bold,
    marginBottom: StyleConstants.padding.small,
  },
  subTitle: {
    color: StyleConstants.colors.white.medium,
    fontSize: StyleConstants.font.sizes.small,
  },
  pageContentContainer: {
    backgroundColor: StyleConstants.colors.blue.pale,
    borderTopLeftRadius: StyleConstants.border.radius.large,
    borderTopRightRadius: StyleConstants.border.radius.large,
  },
});
