import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../themes';
import fonts from '../../themes/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pink,
  },
  title: {
    color: colors.white,
    fontSize: 40,
  },
  messageContainer: {
    overflow: 'hidden',
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: 32,
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 20,
  },
  message: {
    fontFamily: fonts.CHRISTMAS_BOLD,

    textAlign: 'center',
    color: colors.white,
    fontSize: 35,
  },
  image: {
    borderRadius: 20,
    height: metrics.screenHeight / 1.5,
    width: '100%',
    backgroundColor: colors.black,
  },
});
