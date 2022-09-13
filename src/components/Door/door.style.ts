import { StyleSheet } from 'react-native';
import metrics from '../../themes/metrics';
import { colors } from '../../themes';

const DOOR_MARGIN = 32;
export const DOOR_HEIGHT = metrics.screenWidth / 3;
export const DOOR_WIDTH = metrics.screenWidth / 2 - DOOR_MARGIN * 2;

export default StyleSheet.create({
  container: {
    height: DOOR_HEIGHT,
    width: DOOR_WIDTH,
    margin: DOOR_MARGIN,
    opacity: 0.8,
  },
  innerContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center',
  },
  innerLeft: {
    position: 'absolute',
    height: DOOR_HEIGHT,
    width: DOOR_WIDTH / 2,
    left: 0,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: 'blue',
  },
  innerRight: {
    position: 'absolute',
    height: DOOR_HEIGHT,
    width: DOOR_WIDTH / 2,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    right: 0,
    backgroundColor: 'blue',
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
    position: 'absolute',
    left: 8,
    top: 8,
    fontSize: 50,
    color: 'white',
    textAlign: 'center',
  },
  icon: {
    position: 'absolute',
    right: 12,
    bottom: 12,
  },
});
