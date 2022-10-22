import React, { useCallback, useMemo, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles, { DOOR_HEIGHT, DOOR_WIDTH } from './door.style';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../themes';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import Pages from '../../enum/Pages';
import { BlurView } from 'expo-blur';

interface Props {
  title: string;
  message: string;
  value: string;
  index: number;
  isActive: boolean;
  id?: string;
  type?: string;
}

const colorArray = [colors.advent4, colors.advent1, colors.advent2, colors.advent3];

const Door = ({ title, message, value, index, isActive, id, type }: Props) => {
  const navigation = useNavigation();

  const [isOpened, setIsOpened] = useState(false);
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

  const onAnimateDoor = useCallback((isOpen: boolean) => {
    translateX.value = withTiming(isOpen ? 0 : 100, { duration: 1000 });
    setIsOpened(!isOpen);
  }, []);

  const onNavigate = useCallback(() => {
    navigation.navigate({
      name: !!id ? Pages.EDIT_DETAILS : Pages.DETAILS,
      params: { title, message, value, id, type },
    });
  }, [backgroundColor, index, navigation, title, id, message, value]);

  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={() => (!isOpened ? onAnimateDoor(false) : onNavigate())}>
        <View style={styles.innerContainer}>
          {value && isOpened && <Image style={styles.image} source={{ uri: value }} />}
          <BlurView tint={'dark'} style={styles.tintView} />
        </View>
        <Animated.View style={[styles.innerLeft, animatedStyleLeft]}>
          <Image source={require('../../assets/test2.png')} style={styles.innerContentLeft} />
        </Animated.View>
        <Animated.View style={[styles.innerRight, animatedStyleRight]}>
          <Image source={require('../../assets/test2.png')} style={styles.innerContentRight} />
        </Animated.View>

        <Text style={styles.title}>{title}</Text>
        {!isActive && <View style={styles.overlay} />}
      </TouchableOpacity>
      {isOpened && (
        <TouchableOpacity onPress={() => onAnimateDoor(true)} style={styles.closeButton}>
          <Text style={{ color: 'white', textAlign: 'center' }}>{'X'}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Door;
