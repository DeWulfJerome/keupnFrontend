import {Dimensions} from 'react-native';

export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;

const StyleConstants = {
  colors: {
    blue: {
      light: '#651dff',
      medium: '#651dff',
      dark: '#651dff',
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
    medium: 15,
    large: 30,
    ultra: 60,
  },
  border: {
    radius: {
      small: 5,
      medium: 10,
      large: 30,
    },
  },
  width: {
    buttonWidth: deviceWidth * 0.8,
  },
};

export default StyleConstants;
