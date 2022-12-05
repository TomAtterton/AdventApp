import React, { useState } from 'react';
import styles from './details.style';
import { Text, View } from 'react-native';
import { BlurView } from 'expo-blur';
import { useNavigation } from '@react-navigation/native';

import Animated, { FadeIn } from 'react-native-reanimated';
import { colors } from '../../themes';
import LottieView from 'lottie-react-native';
import Animations from '../../themes/animations';
import IconComponent from '../../components/IconComponent';
import Button from '../../components/Button';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SwipeButton from '../../components/SwipeButton';
import LinearGradient from 'react-native-linear-gradient';
import * as Haptics from 'expo-haptics';

interface Props {
  route: {
    params: {
      title: string;
      message: string;
      value: string;
      index: number;
    };
  };
}

const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);

const Details = ({
  route: {
    params: {
      message,
      value = 'https://media.giphy.com/media/BzyTuYCmvSORqs1ABM/giphy.gif',
      index,
    },
  },
}: Props) => {
  const navigation = useNavigation();

  const [shouldShow, setShouldShow] = useState(false);
  const { top } = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      {shouldShow && (
        <>
          <Animated.Image
            style={styles.image}
            entering={FadeIn.delay(200).duration(1000)}
            source={{
              uri: value,
            }}
          />
          <Button style={[styles.closeButton, { top }]} onPress={navigation.goBack}>
            <Ionicons name="close" size={32} color="white" />
          </Button>
          <AnimatedBlurView
            tint={'dark'}
            intensity={80}
            entering={FadeIn.delay(500).duration(1000)}
            style={styles.messageContainer}>
            <Text style={styles.message}>{message}</Text>
          </AnimatedBlurView>
        </>
      )}

      {!shouldShow && (
        <View
          style={styles.starterContainer}
          // @ts-ignore
          sharedTransitionTag={`door-${index}`}>
          <LinearGradient style={styles.gradient} colors={colors.pinkGradient} />
          <Animated.View style={styles.balls} entering={FadeIn.delay(500).duration(1000)}>
            <LottieView autoPlay={true} source={Animations.BALL_BALLS} loop={false} />
          </Animated.View>

          <IconComponent height={200} width={200} value={index} />
          <SwipeButton
            style={styles.swipeButton}
            onToggle={() => {
              Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
              setShouldShow(true);
            }}
          />
        </View>
      )}
    </View>
  );
};

export default Details;

// TODO at a later point
// const transition = SharedTransition.custom((values: any) => {
//   'worklet';
//   return {
//     height: withTiming(values.targetHeight, { duration: 2000 }),
//     width: withTiming(values.targetWidth, { duration: 2000 }),
//     // originX: withTiming(values.targetOriginX, { duration: 2000 }),
//     // originY: withTiming(values.targetOriginY, { duration: 2000 }),
//   };
// });
