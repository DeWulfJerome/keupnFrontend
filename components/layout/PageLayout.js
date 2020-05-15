import React, {useRef, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import StyleConstants, {deviceWidth, deviceHeight} from '../../StyleConstants';

const [minHeaderHeight, maxHeaderHeight] = [80, 155];
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
  const animatedHeaderHeightSmall = scrollAnim.interpolate({
    inputRange: [0, maxScrollOffset],
    outputRange: [maxHeaderHeight - 8, minHeaderHeight - 12],
    extrapolate: 'clamp',
  });

  const animatedScrollViewTop = scrollAnim.interpolate({
    inputRange: [0, maxScrollOffset],
    outputRange: [170, 20],
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

  const animatedOverlayOpacity = scrollAnim.interpolate({
    inputRange: [0, maxScrollOffset],
    outputRange: [0, 0.4],
    extrapolate: 'clamp',
  });

  const animatedImageScale = scrollAnim.interpolate({
    inputRange: [0, maxScrollOffset],
    outputRange: [1, 1.3],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.pageContainer}>
      {/* Header */}
      <Animated.View
        style={[styles.pageHeaderContainer, {height: animatedHeaderHeight}]}>
        <Animated.Image
          source={require('../../assets/backgrounds/pageHeaderBackground.jpg')}
          style={[
            styles.headerImage,
            {
              transform: [{scale: animatedImageScale}],
              height: animatedHeaderHeightSmall,
            },
          ]}
        />
        <Animated.View
          style={[
            styles.headerImageOverlay,
            {
              opacity: animatedOverlayOpacity,
              height: animatedHeaderHeightSmall,
            },
          ]}
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
        <LinearGradient
          colors={['rgba(242, 244, 249, .8)', 'rgba(242, 244, 249, 0)']}
          style={styles.contentFadeOverlay}
        />
      </Animated.View>

      {/* Content */}
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
    // overflow: 'hidden',
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
    width: '100%',
  },
  headerImageOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: 150,
    width: '100%',
    backgroundColor: '#000',
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
    position: 'relative',
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
  contentFadeOverlay: {
    position: 'absolute',
    bottom: -20,
    left: 0,
    right: 0,
    height: 20,
    zIndex: 10,
  },
});
