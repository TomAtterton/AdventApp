import { StyleSheet } from 'react-native';
import { metrics } from '../../../themes';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: metrics.screenWidth,
    paddingVertical: 16,
    marginVertical: 8,
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: { paddingLeft: 16 },
  icon: { position: 'absolute', right: 16 },
});
