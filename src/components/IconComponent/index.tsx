import React, { memo, useMemo } from 'react';
import { AdventSvgs } from '../../utils/adventUtils';
import { DOOR_HEIGHT, DOOR_WIDTH } from '../Door/door.style';
import Animated, { SharedTransition, withTiming } from 'react-native-reanimated';

const IconComponent = ({
  style,
  height = DOOR_HEIGHT / 2,
  width = DOOR_WIDTH / 2,
  value,
}: {
  height?: number;
  width?: number;
  value: number;
}) => {
  const Icon = useMemo(() => AdventSvgs[value], [value]);
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
    <Animated.View
      style={[{ height, width }, style]}
      sharedTransitionStyle={transition}
      sharedTransitionTag={`icon-door-${value}`}>
      <Icon height={height} width={width} />
    </Animated.View>
  );
};

export default memo(IconComponent);
