import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';
import Animations from '../../themes/animations';
import styles from './splashScreen.style';

const Splashscreen = () => (
  <View style={styles.container}>
    <LottieView style={styles.bird} source={Animations.BIRD} autoPlay loop />
  </View>
);
export default Splashscreen;
