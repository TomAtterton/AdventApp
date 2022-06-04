import { StyleSheet } from 'react-native';
import metrics from '../../themes/metrics';
import { colors } from '../../themes';

export const DOOR_HEIGHT = metrics.screenWidth / 3;
export const DOOR_WIDTH = metrics.screenWidth / 2;
const DOOR_MARGIN = 32;

export const ICON_HEIGHT = 60;
export const ICON_WIDTH = 60;

export default StyleSheet.create({
  container: {
    height: DOOR_HEIGHT,
    width: DOOR_WIDTH - DOOR_MARGIN * 2,
    margin: DOOR_MARGIN,
    opacity: 0.8,
    borderRadius: 20,
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
