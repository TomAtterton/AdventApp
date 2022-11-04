import React, { useMemo } from 'react';
import Animated, { interpolateNode } from 'react-native-reanimated';

import runLoopAnimation from '../../helpers/runLoopAnimation';
import { ILayout, IParticle } from '../../types';
import styles from './snow.style';

type Props = {
  data: IParticle;
  layout: ILayout;
};

const Snow = ({ data, layout }: Props) => {
  const animation = useMemo(
    () =>
      runLoopAnimation({
        delay: data.deltas.delay,
        duration: data.deltas.duration,
      }),
    [data.deltas.delay, data.deltas.duration],
  );

  const animatedStyles = useMemo(
    () => [
      styles.container,
      {
        width: data.size,
        height: data.size,
        left: data.deltas.left * layout.width,
        bottom: interpolateNode(animation, {
          inputRange: [0, 1],
          outputRange: [
            layout.height + data.size * data.deltas.bottom,
            -layout.height + data.size * data.deltas.bottom,
          ],
        }),
      },
    ],
    [animation, data.deltas.bottom, data.deltas.left, data.size, layout.height, layout.width],
  );

  return <Animated.View style={animatedStyles}>{data.shape}</Animated.View>;
};

export default Snow;
