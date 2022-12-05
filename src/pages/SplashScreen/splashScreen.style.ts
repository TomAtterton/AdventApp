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
    top: 40,
    position: 'absolute',
    height: 200,
  },
  cat: {
    bottom: 0,
    width: 250,
    height: 600,
    position: 'absolute',
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
