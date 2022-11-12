import { StyleSheet } from 'react-native';
import { colors } from '../../themes';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  settings: {
    alignSelf: 'flex-end',
    paddingRight: 16,
    height: 50,
    justifyContent: 'center',
  },
});
