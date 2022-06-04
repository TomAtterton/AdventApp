import { StyleSheet } from 'react-native';
import { metrics } from '../../themes';

export const IMAGE_WIDTH = metrics.screenWidth / 1.5;
export const IMAGE_HEIGHT = 180;

export default StyleSheet.create({
  container: {
    backgroundColor:'red',
    height: metrics.screenHeight / 2,
    width: metrics.screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    borderRadius: 20,
  },
});
