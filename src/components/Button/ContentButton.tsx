import { Text, TouchableOpacity } from 'react-native';
import React from 'react';

export const ContentButton = ({ title, onPress }: { title: string; onPress: () => void }) => {
  return (
    <TouchableOpacity
      style={{
        borderRadius: 20,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        marginVertical: 10,
      }}
      onPress={onPress}>
      <Text style={{ color: 'white' }}>{title}</Text>
    </TouchableOpacity>
  );
};
