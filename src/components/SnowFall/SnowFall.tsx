import React, { useState, useCallback, memo } from 'react';
import { View } from 'react-native';
import Snow from './components/Snow';
import createParticle from './helpers/createParticle';
import { IParticle } from './types';
import styles from './snowFall.style';

type Props = {
  count: number;
  duration: number;
  minSize: number;
  maxSize: number;
  colors: string[];
};

const SnowFall = ({ count, duration, minSize, maxSize, colors }: Props) => {
  const [layout, setLayout] = useState<null>(null);

  const [particles] = useState<IParticle[]>(() =>
    Array.from({ length: count }).map((_, index) =>
      createParticle({
        count,
        duration,
        minSize,
        maxSize,
        colors,
        index,
      }),
    ),
  );

  const onLayout = useCallback(event => setLayout(event.nativeEvent.layout), []);

  return (
    <View onLayout={onLayout} style={styles.container}>
      {layout && particles.map((data, index) => <Snow key={index} data={data} layout={layout} />)}
    </View>
  );
};

SnowFall.defaultProps = {
  count: 50,
  duration: 10000,
  minSize: 10,
  maxSize: 20,
  colors: ['#FFFFFF'],
};

export default memo(SnowFall);
