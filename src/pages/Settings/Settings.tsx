import React from 'react';
import styles from './settings.style';
import { Text, View } from 'react-native';
import MenuItem from './MenuItem';

interface Props {}

const Settings = ({}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{'Settings'}</Text>
      <View style={styles.menuItemContainer}>
        <MenuItem title={'Create calendar'} />
        <MenuItem title={'Edit calendar'} />
      </View>
    </View>
  );
};

export default Settings;
