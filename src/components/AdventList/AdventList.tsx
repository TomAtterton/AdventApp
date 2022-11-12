import React, { memo, useCallback, useState, useEffect } from 'react';
import { FlatList, ViewProps } from 'react-native';
import styles from './adventList.style';
import { useAppState } from '@react-native-community/hooks';

import { advent } from '../../config/adventConfig';
import Door from '../Door';
import { currentDayOfMonth } from '../../utils/dateUtils';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props {
  style: ViewProps;
  data?: advent[];
  id?: string;
  isCreating: boolean;
}

const keyExtractor = (item: advent, index: number) => `${item?.day} + ${index}`;

const AdventList = ({ style, data, id, isCreating }: Props) => {
  const currentAppState = useAppState();

  const [currentDay, setCurrentDay] = useState(currentDayOfMonth());

  useEffect(() => {
    if (currentAppState === 'active') {
      setCurrentDay(currentDayOfMonth());
    }
  }, [currentAppState]);

  const onRenderItem = useCallback(
    ({ item, index }: { item: advent; index: number }) => (
      <Door
        title={item.day}
        index={index}
        message={item.message}
        value={item.value}
        isActive={index + 1 <= currentDay}
        id={id}
        type={item.type}
        isCreating={isCreating}
      />
    ),
    [id, currentDay, isCreating],
  );

  const { bottom, top } = useSafeAreaInsets();

  return (
    <FlatList
      keyExtractor={keyExtractor}
      showsVerticalScrollIndicator={false}
      style={[styles.container, style]}
      contentContainerStyle={{ paddingBottom: bottom + top + 30 }}
      numColumns={2}
      data={data}
      renderItem={onRenderItem}
    />
  );
};

export default memo(AdventList);
