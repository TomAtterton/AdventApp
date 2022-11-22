import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  bird: {
    bottom:20,
    position: 'absolute',
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
