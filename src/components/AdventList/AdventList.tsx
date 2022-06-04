import React, { memo, ReactNode, useCallback } from 'react';
import { FlatList } from 'react-native';
import styles from './adventList.style';
import adventConfig, { advent } from '../../config/adventConfig';
import Door from '../Door';

interface Props {
  data: advent[];
}

const AdventList = ({ data = adventConfig }: Props) => {
  const onRenderItem = useCallback(
    ({ item, index }) => (
      <Door title={item.day} index={index} message={item.message} gif={item.gif} isActive={true} />
    ),
    [],
  );

  return <FlatList style={styles.container} numColumns={2} data={data} renderItem={onRenderItem} />;
};

export default memo(AdventList);
