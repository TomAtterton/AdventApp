import { Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { colors } from '../../themes';

export const ContentButton = ({ title, onPress }: { title: string; onPress: () => void }) => {
  return (
    <TouchableOpacity
      style={{
        borderRadius: 20,
        backgroundColor: colors.blue,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        marginVertical: 10,
      }}
      onPress={onPress}>
      <Text style={{ color: colors.white }}>{title}</Text>
    </TouchableOpacity>
  );
};
