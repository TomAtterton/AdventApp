import React, { memo, useMemo } from 'react';
import { AdventImages } from '../../utils/adventUtils';
import { DOOR_HEIGHT, DOOR_WIDTH } from '../Door/door.style';
import Animated, { SharedTransition, withTiming } from 'react-native-reanimated';
import { StyleProp } from 'react-native';

const IconComponent = ({
  style,
  height = DOOR_HEIGHT / 2,
  width = DOOR_WIDTH / 2,
  value,
}: {
  style?: StyleProp<any>;
  height?: number;
  width?: number;
  value: number;
}) => {
  const imageSource = useMemo(() => AdventImages[value], [value]);
  const transition = SharedTransition.custom((values: any) => {
    'worklet';
    return {
      height: withTiming(values.targetHeight, { duration: 1000 }),
      width: withTiming(values.targetWidth, { duration: 1000 }),
      originX: withTiming(values.targetOriginX, { duration: 1000 }),
      originY: withTiming(values.targetOriginY, { duration: 1000 }),
    };
  });
  return (
    <Animated.Image
      style={[{ height, width, overflow: 'visible' }, style]}
      source={imageSource}
      sharedTransitionStyle={transition}
      sharedTransitionTag={`icon-door-${value}`}
    />
  );
};

export default memo(IconComponent);
