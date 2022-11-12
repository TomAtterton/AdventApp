import { StyleSheet } from 'react-native';
import { colors } from '../../themes';

export const BUTTON_HEIGHT = 50;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.homeBackground,
  },
  settingsButton: {
    zIndex: 1,
    height: BUTTON_HEIGHT,
    right: 16,
    position: 'absolute',
  },
  blurView: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
});
