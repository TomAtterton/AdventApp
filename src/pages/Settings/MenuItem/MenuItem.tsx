import Button from '../../../components/Button';
import { Text } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import React from 'react';
import styles from './menuItem.style';

interface Props {
  title: string;
  onPress: () => void;
}

const MenuItem = ({ title, onPress }: Props) => (
  <Button style={styles.container} onPress={onPress}>
    <Text style={styles.title}>{title}</Text>
    <AntDesign style={styles.icon} name={'right'} />
  </Button>
);
export default MenuItem;
