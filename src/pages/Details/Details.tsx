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
import { metrics } from '../../themes';
import BottomSheet from '@gorhom/bottom-sheet';
import LottieView from 'lottie-react-native';
import Animations from '../../themes/animations';
import IconComponent from '../../components/IconComponent';
import {ContentButton} from "../../components/Button/ContentButton";

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

const AnimatedIconComponent = Animated.createAnimatedComponent(IconComponent);
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
      height: withTiming(values.targetHeight, { duration: 1000 }),
      width: withTiming(values.targetWidth, { duration: 1000 }),
      originX: withTiming(values.targetOriginX, { duration: 1000 }),
      originY: withTiming(values.targetOriginY, { duration: 1000 }),
    };
  });
  const snapPoints = useMemo(() => ['1%', '90%'], []);

  const [shouldShow, setShouldShow] = useState(false);

  return (
    <View style={styles.container}>
      {shouldShow && (
        <>
          <Animated.Image
            style={{
              // zIndex: 1,
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              resizeMode: 'contain',
            }}
            // entering={FadeIn.delay(500).duration(1000)}
            // sharedTransitionStyle={transition}
            // sharedTransitionTag="mleko"
            source={{
              uri: value,
            }}
          />
          <AnimatedBlurView
            tint={'dark'}
            entering={FadeIn.delay(500).duration(1000)}
            style={styles.messageContainer}>
            <Text style={styles.message}>{message}</Text>
            <ContentButton title={'Go Back'} onPress={navigation.goBack} />
          </AnimatedBlurView>
        </>
      )}

      {!shouldShow && (
        <Animated.View
          style={{
            flex: 1,
            backgroundColor: 'black',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          sharedTransitionStyle={transition}
          sharedTransitionTag={`door-${index}`}>
          <Animated.View
            style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 250 }}
            entering={FadeIn.delay(500).duration(1000)}>
            <LottieView autoPlay={true} source={Animations.BALL_BALLS} />
          </Animated.View>
          <IconComponent value={index} />
          <ContentButton title={'CONTINUE TO GIF'} onPress={() => setShouldShow(true)} />
          <Animated.View
            style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 250 }}
            entering={FadeIn.delay(500).duration(1000)}>
            <LottieView autoPlay={true} source={Animations.CAT_TREE} />
          </Animated.View>
        </Animated.View>
      )}
    </View>
  );
};

export default Details;
