import Button from '../../../components/Button';
import { Text } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import React from 'react';
import styles from './menuItem.style';

const MenuItem = ({ title }: { title: string }) => (
  <Button style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <AntDesign style={styles.icon} name={'right'} />
  </Button>
);
export default MenuItem;
