import React from 'react';
import { Image, View } from 'react-native';
import LottieView from 'lottie-react-native';
import Animations from '../../themes/animations';
import styles from './splashScreen.style';

const Splashscreen = () => (
  <View style={styles.container}>
    <Image source={require('../../../assets/splash.png')} style={styles.image} />
    <LottieView style={styles.bird} source={Animations.BIRD} autoPlay loop />
  </View>
);
export default Splashscreen;
