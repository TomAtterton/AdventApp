import React, { useCallback, useMemo } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles, { DOOR_WIDTH } from './door.style';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../themes';
import Animated, { useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import Pages from '../../enum/Pages';

interface Props {
  title: string;
  message: string;
  value: string;
  index: number;
  isActive: boolean;
  id?: string;
}

const colorArray = [colors.advent4, colors.advent1, colors.advent2, colors.advent3];

const Door = ({ title, message, value, index, isActive, id, type }: Props) => {
  const navigation = useNavigation();

  const backgroundColor = useMemo(() => colorArray[index % 4], [index]);

  const translateX = useSharedValue(0);

  const animatedStyleLeft = useAnimatedStyle(() => {
    return {
      x: 0,
      y: 0,
      transform: [
        { perspective: 1200 },
        { translateX: -(DOOR_WIDTH / 4) },
        { rotateY: `-${translateX.value}deg` },
        { translateX: DOOR_WIDTH / 4 },
      ],
    };
  }, []);
  const animatedStyleRight = useAnimatedStyle(() => {
    return {
      x: 0,
      y: 0,
      transform: [
        { perspective: 1200 },
        { translateX: DOOR_WIDTH / 4 },
        { rotateY: `${translateX.value}deg` },
        { translateX: -(DOOR_WIDTH / 4) },
      ],
    };
  }, []);

  const onNavigate = useCallback(() => {
    console.log('Value', value);
    navigation.navigate({
      name: !!id ? Pages.EDIT_DETAILS : Pages.DETAILS,
      params: { title, message, value, id, type },
    });
  }, [backgroundColor, index, navigation, title, id, message, value]);

  // const onNavigate = () => {
  //   console.log('onpress');
  //   const isOpen = translateX.value === 100;
  //   translateX.value = withTiming(isOpen ? 0 : 100, { duration: 1000 }, () => {
  //     // useWorkletCallback(() =>
  //     //   navigation.navigate({
  //     //     name: !!id ? Pages.EDIT_DETAILS : Pages.DETAILS,
  //     //     params: { title, message, value, id, type },
  //     //   }),
  //     // );
  //   });
  // };

  return (
    <TouchableOpacity style={styles.container} onPress={onNavigate}>
      <View style={styles.innerContainer}>
        <Text>{message}</Text>
      </View>
      <Animated.View style={[styles.innerLeft, animatedStyleLeft]} />
      <Animated.View style={[styles.innerRight, animatedStyleRight]} />

      <Text style={styles.title}>{title}</Text>
      {!isActive && <View style={styles.overlay} />}
    </TouchableOpacity>
  );
};

export default Door;
