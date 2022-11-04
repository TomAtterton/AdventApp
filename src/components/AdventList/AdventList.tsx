import React, { memo, useCallback, useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import styles from './adventList.style';
import { useAppState } from '@react-native-community/hooks';

import { advent } from '../../config/adventConfig';
import Door from '../Door';
import { currentDayOfMonth } from '../../utils/dateUtils';

interface Props {
  data?: advent[];
  id?: string;
}

const keyExtractor = (item: advent, index: number) => `${item?.day} + ${index}`;

const AdventList = ({ data, id }: Props) => {
  const currentAppState = useAppState();

  const [currentDay, setCurrentDay] = useState(currentDayOfMonth());

  useEffect(() => {
    if (currentAppState === 'active') {
      setCurrentDay(currentDayOfMonth());
    }
  }, [currentAppState]);

  const onRenderItem = useCallback(
    ({ item, index }) => (
      <Door
        title={item.day}
        index={index}
        message={item.message}
        value={item.value}
        isActive={index + 1 <= currentDay}
        id={id}
        type={item.type}
      />
    ),
    [id, currentDay],
  );

  return (
    <FlatList
      keyExtractor={keyExtractor}
      style={styles.container}
      numColumns={2}
      data={data}
      renderItem={onRenderItem}
    />
  );
};

export default memo(AdventList);
