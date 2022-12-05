import React, { memo, useCallback, useMemo, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles, { DOOR_HEIGHT, DOOR_WIDTH } from './door.style';
import { useNavigation } from '@react-navigation/native';
import { colors, images } from '../../themes';
import Animated, {
  SharedTransition,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Pages from '../../enum/Pages';
import IconComponent from '../IconComponent';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
  title: number;
  message: string;
  value?: string | null;
  index: number;
  isActive: boolean;
  isCreating?: boolean;
  id?: string;
  type?: string;
}

import * as Haptics from 'expo-haptics';

// TODO replace with different gradients
// const colorArray = [colors.advent4, colors.advent1, colors.advent2, colors.advent3];

const Door = ({ title, message, value, index, isActive, id, type, isCreating }: Props) => {
  const navigation = useNavigation();

  const [isOpened, setIsOpened] = useState(false);
  // TODO support multiple colors
  // const backgroundColor = useMemo(() => colorArray[index % 4], [index]);

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

  const onAnimateDoor = useCallback(
    (isOpen: boolean) => {
      translateX.value = withTiming(isOpen ? 0 : 100, { duration: 1000 });
      setIsOpened(!isOpen);
    },
    [translateX],
  );

  const onNavigate = useCallback(() => {
    navigation.navigate({
      name: id ? Pages.EDIT_DETAILS : Pages.DETAILS,
      params: { title, message, value, id, type, index, type },
    });
  }, [index, navigation, title, id, message, value, type]);

  const onDoorPress = useCallback(() => {
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);

    if (isOpened || isCreating) {
      onNavigate();
      return;
    }

    onAnimateDoor(false);
    setTimeout(() => {
      onNavigate();
    }, 1000);
  }, [isCreating, isOpened, onAnimateDoor, onNavigate]);

  const wallpaperImage = useMemo(() => images.WALLPAPER_STARS, []);

  return (
    <View>
      <TouchableOpacity disabled={!isActive} style={styles.container} onPress={onDoorPress}>
        <View style={styles.innerContainer}>
          {isOpened && (
            <Animated.View sharedTransitionTag={`door-${index}`} style={styles.innerDoor}>
              <LinearGradient style={styles.gradientBackground} colors={colors.pinkRadiant} />
              <IconComponent value={index} />
            </Animated.View>
          )}
        </View>
        <Animated.View style={[styles.innerLeft, animatedStyleLeft]}>
          <Image source={wallpaperImage} style={styles.innerContentLeft} />
        </Animated.View>
        <Animated.View style={[styles.innerRight, animatedStyleRight]}>
          <Image source={wallpaperImage} style={styles.innerContentRight} />
        </Animated.View>
        {!isOpened && <Text style={styles.title}>{title}</Text>}
        {!isActive && <View style={styles.overlay} />}
      </TouchableOpacity>
    </View>
  );
};

export default memo(Door);
