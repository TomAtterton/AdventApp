import React from 'react';
import { Image, View, Text } from 'react-native';
import LottieView from 'lottie-react-native';
import Animations from '../../themes/animations';
import styles from './splashScreen.style';
import { colors } from '../../themes';

const Splashscreen = () => (
  <View style={styles.container}>
    <Image source={require('../../../assets/splash-1.png')} style={styles.image} />
    <View
      style={{
        backgroundColor: colors.blue,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 20,
      }}>
      <Text style={{ textAlign: 'center', fontSize: 40, color: 'white' }}>{'Advent\nApp'}</Text>
    </View>
    <LottieView style={styles.bird} source={Animations.BIRD} autoPlay loop />
  </View>
);
export default Splashscreen;
