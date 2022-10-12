import { StyleSheet } from 'react-native';
import { metrics } from '../../../themes';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: metrics.screenWidth,
    paddingVertical: 16,
    alignItems: 'center',
    flexDirection: 'row',
    // borderWidth: 0.5,
    // marginHorizontal:16,
  },
  title: { paddingLeft: 16 },
  icon: { position: 'absolute', right: 16 },
});
