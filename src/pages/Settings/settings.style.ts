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
    paddingTop: 16,
  },
  menuItemContainer: {
    paddingTop: 32,
  },
});
