import React from 'react';
import { ViewStyle } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  interpolate,
  Extrapolate,
  interpolateColor,
  runOnJS,
} from 'react-native-reanimated';
import { useState } from 'react';
import styles, { BUTTON_PADDING, BUTTON_WIDTH, SWIPEABLE_DIMENSIONS } from './swipeButton.style';
import { colors } from '../../themes';

const H_WAVE_RANGE = SWIPEABLE_DIMENSIONS + 2 * BUTTON_PADDING;
const H_SWIPE_RANGE = BUTTON_WIDTH - 2 * BUTTON_PADDING - SWIPEABLE_DIMENSIONS;
const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

interface Props {
  style: ViewStyle;
  onToggle: (isToggled: boolean) => void;
}

const SwipeButton = ({ style, onToggle }: Props) => {
  const mainColor = colors.blue;

  // Animated value for X translation
  const X = useSharedValue(0);
  // Toggled State
  const [toggled, setToggled] = useState(false);

  // Fires when animation ends
  const handleComplete = (isToggled: boolean) => {
    if (isToggled !== toggled) {
      setToggled(isToggled);
      onToggle(isToggled);
    }
  };

  const panGesture = Gesture.Pan()
    .onUpdate(e => {
      if (e.translationX >= 0 && e.translationX <= H_SWIPE_RANGE) {
        X.value = e.translationX;
      }
    })
    .onEnd(() => {
      if (X.value < BUTTON_WIDTH / 2 - SWIPEABLE_DIMENSIONS / 2) {
        X.value = withSpring(0);
        runOnJS(handleComplete)(false);
      } else {
        X.value = withSpring(H_SWIPE_RANGE);
        runOnJS(handleComplete)(true);
      }
    });

  const InterpolateXInput = [0, H_SWIPE_RANGE];
  const AnimatedStyles = {
    swipeCont: useAnimatedStyle(() => {
      return {};
    }),
    colorWave: useAnimatedStyle(() => {
      return {
        width: H_WAVE_RANGE + X.value,

        opacity: interpolate(X.value, InterpolateXInput, [0, 1]),
      };
    }),
    swipeable: useAnimatedStyle(() => {
      return {
        backgroundColor: interpolateColor(
          X.value,
          [0, BUTTON_WIDTH - SWIPEABLE_DIMENSIONS * 3 - BUTTON_PADDING],
          [mainColor, colors.white],
        ),
        transform: [{ translateX: X.value }],
      };
    }),
    swipeText: useAnimatedStyle(() => {
      return {
        opacity: interpolate(X.value, InterpolateXInput, [0.7, 0], Extrapolate.CLAMP),
        transform: [
          {
            translateX: interpolate(
              X.value,
              InterpolateXInput,
              [0, BUTTON_WIDTH / 2 - SWIPEABLE_DIMENSIONS * 3],
              Extrapolate.CLAMP,
            ),
          },
        ],
      };
    }),
  };

  return (
    <Animated.View style={[styles.swipeCont, AnimatedStyles.swipeCont, style]}>
      <AnimatedLinearGradient
        style={[AnimatedStyles.colorWave, styles.colorWave]}
        colors={colors.blueGradient}
        start={{ x: 0.0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
      />
      <GestureDetector gesture={panGesture}>
        <Animated.View style={[styles.swipeable, AnimatedStyles.swipeable]} />
      </GestureDetector>
      <Animated.Text style={[styles.swipeText, AnimatedStyles.swipeText, { color: mainColor }]}>
        Swipe To Unlock
      </Animated.Text>
    </Animated.View>
  );
};

export default SwipeButton;
