import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export default {
  screenHeight: height,
  screenWidth: width,
};
