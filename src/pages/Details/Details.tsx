import React, { useEffect, useMemo, useState } from 'react';
import styles from './details.style';
import { Image, Text, View } from 'react-native';
import { BlurView } from 'expo-blur';
import { useNavigation } from '@react-navigation/native';

import Animated, {
  FadeIn,
  FadeOut,
  SharedTransition,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { colors, metrics } from '../../themes';
import BottomSheet from '@gorhom/bottom-sheet';
import LottieView from 'lottie-react-native';
import Animations from '../../themes/animations';
import IconComponent from '../../components/IconComponent';
import { ContentButton } from '../../components/Button/ContentButton';
import { AdventSvgs } from '../../utils/adventUtils';
import Button from '../../components/Button';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SwipeButton from '../../components/SwipeButton';

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
      title,
      message,
      value = 'https://media.giphy.com/media/BzyTuYCmvSORqs1ABM/giphy.gif',
      index,
    },
  },
}: Props) => {
  const navigation = useNavigation();

  const transition = SharedTransition.custom((values: any) => {
    'worklet';
    return {
      height: withTiming(values.targetHeight, { duration: 2000 }),
      width: withTiming(values.targetWidth, { duration: 2000 }),
      // originX: withTiming(values.targetOriginX, { duration: 2000 }),
      // originY: withTiming(values.targetOriginY, { duration: 2000 }),
    };
  });
  const snapPoints = useMemo(() => ['1%', '90%'], []);

  const [shouldShow, setShouldShow] = useState(false);
  const Icon = useMemo(() => AdventSvgs[index], [index]);
  const { top } = useSafeAreaInsets();
  return (
    <View style={styles.container}>
      {shouldShow && (
        <>
          <Animated.Image
            style={{
              backgroundColor: 'black',
              // zIndex: 1,
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              resizeMode: 'contain',
            }}
            entering={FadeIn.delay(200).duration(1000)}
            // sharedTransitionStyle={transition}
            source={{
              uri: value,
            }}
          />
          <Button
            style={[{ top: top, position: 'absolute', right: 16 }]}
            onPress={navigation.goBack}>
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
          style={{
            flex: 1,
            backgroundColor: '#FFC9E2',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          sharedTransitionTag={`door-${index}`}>
          <Animated.View
            style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 250 }}
            entering={FadeIn.delay(500).duration(1000)}>
            <LottieView autoPlay={true} source={Animations.BALL_BALLS} />
          </Animated.View>

          <IconComponent height={200} width={200} value={index} />
          <SwipeButton
            style={{ position: 'absolute', bottom: 60 }}
            onToggle={() => {
              setShouldShow(true);
            }}
          />
        </View>
      )}
    </View>
  );
};

export default Details;
