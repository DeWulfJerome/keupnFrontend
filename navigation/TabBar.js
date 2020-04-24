import React, {useState, useLayoutEffect, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native';
import StyleConstants from '../StyleConstants';

const dotSize = 10;

const TabBar = ({state, descriptors, navigation}) => {
  const [outerViewWidth, setOuterViewWidth] = useState(300);
  const [activeTab, setActiveTab] = useState(undefined);
  const [tabCoords, setTabCoords] = useState({
    one: {left: 0, right: 0},
    two: {left: 0, right: 0},
    three: {left: 0, right: 0},
    four: {left: 0, right: 0},
  });
  const dotAnimLeft = useRef(new Animated.Value(0)).current;
  const dotAnimRight = useRef(new Animated.Value(0)).current;

  useLayoutEffect(() => {
    const interval = outerViewWidth / 4;
    const firstDot = interval / 2 - dotSize / 2;
    dotAnimRight.setValue(state.index);
    dotAnimLeft.setValue(state.index);

    setTabCoords({
      one: {left: firstDot, right: outerViewWidth - (firstDot + dotSize)},
      two: {
        left: firstDot + interval,
        right: outerViewWidth - (firstDot + dotSize + interval),
      },
      three: {
        left: firstDot + interval * 2,
        right: outerViewWidth - (firstDot + dotSize + interval * 2),
      },
      four: {
        left: firstDot + interval * 3,
        right: outerViewWidth - (firstDot + dotSize + interval * 3),
      },
    });
    setActiveTab(state.index);
    // console.log(leftAnim, rightAnim);
  }, []);

  const onTabPress = (route, index) => {
    animateTabDot(index);
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    });

    if (state.index !== index) {
      navigation.navigate(route.name);
    }
  };

  const onTabLongPress = route => {
    const event = navigation.emit({
      type: 'tabLongPress',
      target: route.key,
    });
  };

  const renderTabs = () => {
    return state.routes.map((route, index) => {
      return (
        <TouchableOpacity
          style={styles.tabWrapper}
          onPress={() => {
            onTabPress(route, index);
          }}
          onLongPress={() => {
            onTabLongPress(route);
          }}>
          <View style={styles.tempTabView} />
        </TouchableOpacity>
      );
    });
  };

  const animateTabDot = index => {
    if (index === activeTab) {
      return;
    }
    if (index > activeTab) {
      //Animate right
      Animated.sequence([
        Animated.timing(dotAnimRight, {
          toValue: index,
          duration: 300,
          easing: Easing.ease,
          useNativeDriver: false,
        }),
        Animated.timing(dotAnimLeft, {
          toValue: index,
          duration: 200,

          easing: Easing.ease,
          useNativeDriver: false,
        }),
      ]).start();
    } else {
      // Animate left
      Animated.sequence([
        Animated.timing(dotAnimLeft, {
          toValue: index,
          duration: 300,
          easing: Easing.ease,
          useNativeDriver: false,
        }),
        Animated.timing(dotAnimRight, {
          toValue: index,
          duration: 200,

          easing: Easing.ease,
          useNativeDriver: false,
        }),
      ]).start();
    }
    setActiveTab(index);
  };

  const leftAnim = dotAnimLeft.interpolate({
    inputRange: [0, 1, 2, 3],
    outputRange: [
      tabCoords.one.left,
      tabCoords.two.left,
      tabCoords.three.left,
      tabCoords.four.left,
    ],
    extrapolate: 'clamp',
  });

  const rightAnim = dotAnimRight.interpolate({
    inputRange: [0, 1, 2, 3],
    outputRange: [
      tabCoords.one.right,
      tabCoords.two.right,
      tabCoords.three.right,
      tabCoords.four.right,
    ],
    extrapolate: 'clamp',
  });
  return (
    <View
      style={styles.tabBarContainer}
      onLayout={e => {
        setOuterViewWidth(e.nativeEvent.layout.width);
      }}>
      {renderTabs()}
      <Animated.View
        style={[styles.navDot, {left: leftAnim, right: rightAnim}]}
      />
    </View>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    position: 'relative',
    paddingBottom: 20,
  },
  tempTabView: {
    backgroundColor: StyleConstants.colors.grey.light,
    height: 30,
    width: 30,
    borderRadius: 30,
  },
  tabWrapper: {
    padding: StyleConstants.padding.medium,
    alignItems: 'center',
    width: '25%',
  },
  navDot: {
    backgroundColor: StyleConstants.colors.blue.medium,
    height: dotSize,
    borderRadius: 10,
    position: 'absolute',
    bottom: 10,
  },
});
