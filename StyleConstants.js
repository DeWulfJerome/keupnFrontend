import {Dimensions} from 'react-native';

export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;

const StyleConstants = {
  colors: {
    blue: {
      pale: '#F2F4F9',
      light: '#651dff',
      medium: '#651dff',
      dark: '#060013',
    },
    red: {
      medium: '#cc0000',
    },
    green: {
      medium: '#0b7000',
    },
    white: {
      medium: '#fff',
    },
    black: {
      fontBlack: '#262626',
    },
    grey: {
      light: '#f2f2f2',
      dark: '#666666',
    },
  },
  font: {
    sizes: {
      small: 14,
      medium: 16,
      large: 22,
    },
    weight: {
      light: '300',
      regular: '400',
      bold: '700',
      thicc: '900',
    },
  },
  padding: {
    small: 7,
    medium: 15,
    large: 30,
    ultra: 60,
    navAvoider: 120,
  },
  border: {
    radius: {
      small: 5,
      medium: 10,
      regular: 20,
      large: 30,
      huge: 30,
    },
  },
  width: {
    buttonWidth: deviceWidth * 0.8,
  },
};

export default StyleConstants;
