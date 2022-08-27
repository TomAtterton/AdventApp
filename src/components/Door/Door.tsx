import React, { useCallback, useMemo } from 'react';
import { Text, View } from 'react-native';
import styles from './door.style';
import Button from '../Button';
import { useNavigation } from '@react-navigation/native';
import Pages from '../../enum/Pages';
import { colors } from '../../themes';

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

  const onNavigate = useCallback(() => {
    console.log('Value', value)
    navigation.navigate({
      name: !!id ? Pages.EDIT_DETAILS : Pages.DETAILS,
      params: { title, message, value, id, type },
    });
  }, [backgroundColor, index, navigation, title, id, message, value]);

  return (
    <Button disabled={!isActive} onPress={onNavigate}>
      <View style={[styles.container, { backgroundColor }]}>
        <Text style={styles.title}>{title}</Text>
        {!isActive && <View style={styles.overlay} />}
      </View>
    </Button>
  );
};

export default Door;
