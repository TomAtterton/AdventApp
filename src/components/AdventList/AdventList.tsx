import React, { memo, useCallback, useState, useEffect, useMemo } from 'react';
import { FlatList, ViewProps } from 'react-native';
import styles from './adventList.style';
import { useAppState } from '@react-native-community/hooks';

import { advent } from '../../config/adventConfig';
import Door from '../Door';
import { currentDayOfMonth } from '../../utils/dateUtils';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props {
  style: any;
  data?: advent[];
  id?: string;
  isCreating: boolean;
}

const keyExtractor = (item: advent, index: number) => `${item?.day} + ${index}`;
const randomArray = Array.from({ length: 24 }, (_, i) => i ).sort(() => Math.random() - 0.5);

const AdventList = ({ style, data, id, isCreating }: Props) => {
  const reorderedData = useMemo(
    () => data?.map((item, index) => ({ ...data[randomArray[index]] })),
    [data],
  );
  const currentAppState = useAppState();

  const [currentDay, setCurrentDay] = useState(currentDayOfMonth());

  useEffect(() => {
    if (currentAppState === 'active') {
      setCurrentDay(currentDayOfMonth());
    }
  }, [currentAppState]);

  const onRenderItem = useCallback(
    ({ item, index }: { item: advent; index: number }) => {
      const currentDayIndex = randomArray[index];
      return (
        <Door
          title={currentDayIndex + 1}
          message={item.message}
          value={item.value}
          index={currentDayIndex}
          isActive={(currentDayIndex <= currentDay) || isCreating}
          id={id}
          type={item.type}
          isCreating={isCreating}
        />
      );
    },
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
      data={reorderedData}
      renderItem={onRenderItem}
    />
  );
};

export default memo(AdventList);
