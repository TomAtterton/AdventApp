import React, { memo, useCallback } from 'react';
import { FlatList } from 'react-native';
import styles from './adventList.style';
import adventConfig, { advent } from '../../config/adventConfig';
import Door from '../Door';

interface Props {
  data: advent[];
  id?: string;
}

const AdventList = ({ data = adventConfig, id }: Props) => {
  const onRenderItem = useCallback(
    ({ item, index }) => (
      <Door
        title={item.day}
        index={index}
        message={item.message}
        value={item.value}
        isActive={true}
        id={id}
        type={item.type}
      />
    ),
    [id],
  );

  return <FlatList style={styles.container} numColumns={2} data={data} renderItem={onRenderItem} />;
};

export default memo(AdventList);
