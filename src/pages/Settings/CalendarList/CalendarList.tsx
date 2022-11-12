import { View } from 'react-native';
import React from 'react';
import MenuItem from '../MenuItem';

interface Props {
  calendars: { id: string; name: string }[];
  onPress: (id: string, name: string) => void;
}

const CalendarList = ({ calendars, onPress }: Props) => (
  <View style={{ backgroundColor: 'white' }}>
    {calendars &&
      Object.values(calendars).map(calendar => {
        const { id, name } = calendar;
        return (
          <MenuItem
            key={id}
            style={{ paddingLeft: 16 }}
            title={name}
            onPress={() => onPress(id, name)}
            iconName={'right'}
          />
        );
      })}
  </View>
);

export default CalendarList;
