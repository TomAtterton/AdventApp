import { Dimensions, StyleSheet } from 'react-native';
import { metrics } from '../../themes';
import fonts from '../../themes/fonts';

export const BUTTON_WIDTH = Dimensions.get('window').width * 0.8;
export const BUTTON_HEIGHT = 50;
export const BUTTON_PADDING = 10;

export const SWIPEABLE_DIMENSIONS = BUTTON_HEIGHT - 2 * BUTTON_PADDING;

export default StyleSheet.create({
  swipeCont: {
    height: BUTTON_HEIGHT,
    width: BUTTON_WIDTH,
    backgroundColor: '#fff',
    borderRadius: BUTTON_HEIGHT,
    padding: BUTTON_PADDING,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  colorWave: {
    position: 'absolute',
    left: 0,
    height: BUTTON_HEIGHT,
    borderRadius: BUTTON_HEIGHT,
  },
  swipeable: {
    position: 'absolute',
    left: BUTTON_PADDING,
    height: SWIPEABLE_DIMENSIONS,
    width: SWIPEABLE_DIMENSIONS,
    borderRadius: SWIPEABLE_DIMENSIONS,
    zIndex: 3,
  },
  swipeText: {
    fontFamily: fonts.CHRISTMAS_BOLD,
    alignSelf: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    zIndex: 2,
  },
});
