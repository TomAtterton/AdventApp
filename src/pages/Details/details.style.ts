import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../themes';
import fonts from '../../themes/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pink,
  },
  starterContainer: {
    flex: 1,
    backgroundColor: colors.pink,
    justifyContent: 'center',
    alignItems: 'center',
  },
  balls: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 250,
  },
  title: {
    color: colors.white,
    fontSize: 40,
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    borderRadius: 20,
  },
  image: {
    backgroundColor: colors.black,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    resizeMode: 'contain',
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
  swipeButton: { position: 'absolute', bottom: 60 },
  closeButton: { position: 'absolute', right: 16 },
});
