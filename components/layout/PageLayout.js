import React, {useRef, useState} from 'react';
import {StyleSheet, Text, View, Image, Animated} from 'react-native';
import StyleConstants, {deviceWidth, deviceHeight} from '../../StyleConstants';
import {ScrollView} from 'react-native-gesture-handler';

const [minHeaderHeight, maxHeaderHeight] = [80, 150];
const maxScrollOffset = 75;

const PageLayout = ({children, title, subTitle}) => {
  const scrollAnim = useRef(new Animated.Value(0)).current;
  const [titleWidth, setTitleWidth] = useState(0);
  const [titleContainerWidth, setTitleContainerWidth] = useState(0);

  const animatedHeaderHeight = scrollAnim.interpolate({
    inputRange: [0, maxScrollOffset],
    outputRange: [maxHeaderHeight, minHeaderHeight],
    extrapolate: 'clamp',
  });

  const animatedScrollViewTop = scrollAnim.interpolate({
    inputRange: [0, maxScrollOffset],
    outputRange: [150, 20],
    extrapolate: 'clamp',
  });

  const animatedSubtitleOpacity = scrollAnim.interpolate({
    inputRange: [0, maxScrollOffset / 3],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const animateSubtitleY = scrollAnim.interpolate({
    inputRange: [0, maxScrollOffset],
    outputRange: [0, -60],
    extrapolate: 'clamp',
  });

  const animatedTitleX = scrollAnim.interpolate({
    inputRange: [0, maxScrollOffset],
    outputRange: [0, titleContainerWidth / 2 - titleWidth / 2],
    extrapolate: 'clamp',
  });

  const animatedTitleY = scrollAnim.interpolate({
    inputRange: [0, maxScrollOffset],
    outputRange: [0, 20],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.pageContainer}>
      <ScrollView
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollAnim}}}],
          {useNativeDrive: false},
        )}
        contentContainerStyle={{}}
        style={{backgroundColor: StyleConstants.colors.blue.pale}}
        scrollEventThrottle={16}>
        <Animated.View
          style={[
            styles.pageContentContainer,
            {
              marginTop: animatedScrollViewTop,
            },
          ]}>
          {children}
        </Animated.View>
      </ScrollView>

      <Animated.View
        style={[styles.pageHeaderContainer, {height: animatedHeaderHeight}]}>
        <Image
          source={require('../../assets/backgrounds/pageHeaderBackground.jpg')}
          style={styles.headerImage}
          resizeMode="stretch"
        />
        <View
          style={styles.titleContainer}
          onLayout={e => setTitleContainerWidth(e.nativeEvent.layout.width)}>
          <View style={{flexDirection: 'row'}}>
            <Animated.Text
              onLayout={e => setTitleWidth(e.nativeEvent.layout.width)}
              style={[
                styles.title,
                {
                  transform: [
                    {translateX: animatedTitleX},
                    {translateY: animatedTitleY},
                  ],
                },
              ]}>
              {title}
            </Animated.Text>
          </View>
          <Animated.Text
            style={[
              styles.subTitle,
              {
                opacity: animatedSubtitleOpacity,
                transform: [{translateY: animateSubtitleY}],
              },
            ]}>
            {subTitle}
          </Animated.Text>
        </View>
        <View style={styles.fakeBorders} />
      </Animated.View>
    </View>
  );
};

export default PageLayout;

const styles = StyleSheet.create({
  pageContainer: {
    height: deviceHeight,
  },
  pageHeaderContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
    paddingBottom: StyleConstants.border.radius.large,
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
    paddingBottom: StyleConstants.padding.navAvoider,
  },
  fakeBorders: {
    backgroundColor: StyleConstants.colors.blue.pale,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: StyleConstants.border.radius.large,
    borderTopLeftRadius: StyleConstants.border.radius.large,
    borderTopRightRadius: StyleConstants.border.radius.large,
  },
});
