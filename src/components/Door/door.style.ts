import { StyleSheet } from 'react-native';
import metrics from '../../themes/metrics';
import { colors } from '../../themes';
import fonts from '../../themes/fonts';

const DOOR_MARGIN = 32;
export const DOOR_HEIGHT = metrics.screenWidth / 3;
export const DOOR_WIDTH = metrics.screenWidth / 2 - DOOR_MARGIN * 2;

export default StyleSheet.create({
  container: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    height: DOOR_HEIGHT,
    width: DOOR_WIDTH,
    margin: DOOR_MARGIN,
  },
  innerContainer: {
    flex: 1,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {},
  image: {
    borderRadius: 20,
    height: DOOR_HEIGHT,
    width: DOOR_WIDTH,
  },
  temp: {
    borderRadius: 20,
    height: DOOR_HEIGHT,
    width: DOOR_WIDTH,
    // backgroundColor: '#FFC9E2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tempTitle: {
    fontSize: 50,
    color: 'white',
    textAlign: 'center',
  },
  tintView: {
    overflow: 'hidden',
    borderRadius: 20,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
  },
  innerLeft: {
    position: 'absolute',
    height: DOOR_HEIGHT,
    width: DOOR_WIDTH / 2,
    left: 0,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  innerContentLeft: {
    height: DOOR_HEIGHT,
    width: DOOR_WIDTH / 2,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  innerContentRight: {
    height: DOOR_HEIGHT,
    width: DOOR_WIDTH / 2,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  innerRight: {
    position: 'absolute',
    height: DOOR_HEIGHT,
    width: DOOR_WIDTH / 2,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    right: 0,
  },
  overlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: colors.black,
    opacity: 0.4,
    borderRadius: 20,
  },
  title: {
    fontFamily: fonts.CHRISTMAS_BOLD,
    position: 'absolute',
    left: 16,
    //TODO why
    top: -10,
    fontSize: 60,
    color: 'white',
    textAlign: 'center',
  },
  icon: {
    position: 'absolute',
    right: 12,
    bottom: 12,
  },
  closeButton: {
    position: 'absolute',
    top: DOOR_HEIGHT / 3,
    right: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 30,
    height: 30,
    borderRadius: 20,
    width: 30,
    backgroundColor: 'black',
  },
});
