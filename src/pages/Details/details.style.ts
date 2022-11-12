import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 40,
    // position: 'absolute',
    // left: 16,
    // top: 16,
  },
  messageContainer: {
    // zIndex:2,
    overflow: 'hidden',
    position: 'absolute',
    left: 16,
    right: 16,
    bottom: 32,
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderRadius: 20,
  },
  message: {
    textAlign: 'center',
    color: 'white',
    fontSize: 24,
  },
  image: {
    borderRadius: 20,

    // flex: 1,
    height: metrics.screenHeight / 1.5,
    width: '100%',
    // resizeMode: 'contain',
    backgroundColor: 'black',
  },
});
