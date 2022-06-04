import React, { memo, ReactNode, useCallback } from 'react';
import { FlatList } from 'react-native';
import styles from './adventList.style';
import adventConfig from '../../config/adventConfig';
import Door from '../Door';

interface Props {
  data: ReactNode[];
}

const AdventList = ({ data = adventConfig }: Props) => {
  const onRenderItem = useCallback(
    ({ item, index }) => <Door title={item.day} index={index} isActive={true} />,
    [],
  );

  return <FlatList style={styles.container} numColumns={2} data={data} renderItem={onRenderItem} />;
};

export default memo(AdventList);
