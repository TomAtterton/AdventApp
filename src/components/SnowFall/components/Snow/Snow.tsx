import React, { memo, useEffect, useMemo } from 'react';
import Animated, {
  Easing,
  Extrapolation,
  interpolate,
  interpolateNode,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

import runLoopAnimation from '../../helpers/runLoopAnimation';
import { ILayout, IParticle } from '../../types';
import styles from './snow.style';

type Props = {
  data: IParticle;
  layout: ILayout;
};

const Snow = ({ data, layout }: Props) => {
  // const animations = useMemo(
  //   () =>
  //     runLoopAnimation({
  //       delay: data.deltas.delay,
  //       duration: data.deltas.duration,
  //     }),
  //   [data.deltas.delay, data.deltas.duration],
  // );

  const animation = useSharedValue(0);
  useEffect(() => {
    animation.value = withRepeat(
      withDelay(
        data.deltas.delay,
        withTiming(1, { duration: data.deltas.duration, easing: Easing.quad }),
      ),
      -1,
      false,
      finished => {
        if (finished) {
          animation.value = 0;
        }
      },
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    const bottom = interpolate(
      animation.value,
      [0, 1],
      [
        layout.height + data.size * data.deltas.bottom,
        -layout.height + data.size * data.deltas.bottom,
      ],
      { extrapolateRight: Extrapolation.CLAMP },
    );

    return {
      width: data.size,
      height: data.size,
      left: data.deltas.left * layout.width,
      bottom,
    };
  }, [animation.value]);

  return <Animated.View style={[styles.container, animatedStyle]}>{data.shape}</Animated.View>;
};

export default memo(Snow);
