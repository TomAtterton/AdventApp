import React from 'react';
import { Image, View, Text } from 'react-native';
import LottieView from 'lottie-react-native';
import Animations from '../../themes/animations';
import styles from './splashScreen.style';
import { colors } from '../../themes';
import fonts from '../../themes/fonts';

const Splashscreen = () => (
  <View style={styles.container}>
    <Image source={require('../../../assets/splash-1.png')} style={styles.image} />
    <View
      style={{
        backgroundColor: colors.blue,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 40,
        paddingVertical: 20,
      }}>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 50,
          color: 'white',
          fontFamily: fonts.CHRISTMAS_BOLD,
        }}>
        {'Advent\nApp'}
      </Text>
    </View>
    <LottieView style={styles.bird} source={Animations.BIRD} autoPlay loop />

    <LottieView style={styles.cat} source={Animations.POKING_CAT} autoPlay />
  </View>
);
export default Splashscreen;
