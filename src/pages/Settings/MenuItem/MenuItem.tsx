import Button from '../../../components/Button';
import { Text, ViewStyle } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import React from 'react';
import styles from './menuItem.style';

interface Props {
  style?: ViewStyle;
  title: string;
  onPress: () => void;
  iconName: string;
}

const MenuItem = ({ style, title, onPress, iconName }: Props) => (
  <Button style={[styles.container, style]} onPress={onPress}>
    <Text style={styles.title}>{title}</Text>
    <AntDesign style={styles.icon} name={iconName} />
  </Button>
);
export default MenuItem;
