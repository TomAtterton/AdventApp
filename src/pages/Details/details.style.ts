import { StyleSheet } from 'react-native';
import { colors } from '../../themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 40,
    position: 'absolute',
    left: 16,
    top: 16,
  },
  message: {
    paddingTop: 32,
    color: 'white',
    fontSize: 40,
  },
});
