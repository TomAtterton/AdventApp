import { StyleSheet } from 'react-native';
import { colors } from '../../themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
    position: 'absolute',
  },
  bird: {
    // alignSelf: 'center',
    // position: 'absolute',
    // top: 60,
    height: 200,
  },
  headerImage: {
    height: 200,
  },
  footerImage: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 4,
    right: 29,
    height: 400,
  },
});
