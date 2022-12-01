import React, { useCallback } from 'react';
import { Pressable, PressableProps, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import Animated, {
  Easing,
  EasingNode,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

interface Props {
  children: React.ReactNode;
}

const Button = ({ children, ...props }: Props & TouchableOpacityProps) => {
  return <TouchableOpacity {...props}>{children}</TouchableOpacity>;
};

export default Button;
