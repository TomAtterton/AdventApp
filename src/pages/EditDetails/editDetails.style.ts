import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  title: {
    color: 'white',
    fontSize: 40,
    position: 'absolute',
    left: 16,
    top: 16,
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
    // height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    color: 'white',
    fontSize: 24,
  },
  image: {
    height: metrics.screenHeight,
    width: metrics.screenWidth,
    resizeMode: 'contain',
    backgroundColor: 'black',
  },
  closeButton: {
    position: 'absolute',
    right: 16,
    top: 40,
    backgroundColor: 'red',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
