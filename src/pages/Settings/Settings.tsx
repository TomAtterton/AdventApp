import React, { useCallback, useEffect, useState } from 'react';
import styles from './settings.style';
import { Linking, Text, TouchableOpacity, View } from 'react-native';
import MenuItem from './MenuItem';
import { useNavigation } from '@react-navigation/native';
import Pages from '../../enum/Pages';
import DialogTextInput from '../../components/DialogTextInput';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import { onAddCalendar } from '../../store/calendarSlice';
import uuid from 'react-native-uuid';

import { SafeAreaView } from 'react-native-safe-area-context';
import { fetchCalendars } from '../../utils/firebaseUtils';

interface Props {}

const Settings = ({}: Props) => {
  const { navigate, goBack } = useNavigation();

  const [showDialog, setShowDialog] = useState(false);

  const dispatch = useAppDispatch();
  const createdCalendars = useAppSelector(state => state.calendar.createdCalendars);

  useEffect(() => {
    fetchCalendars();
  }, []);

  const onNavigateToCalendar = useCallback((id: string, name: string) => {
    navigate({
      name: Pages.CREATE_CALENDAR,
      params: { id, name },
    });
  }, []);

  const onCreateCalendar = useCallback(
    async (name: string) => {
      setShowDialog(false);
      //
      const id = uuid.v4() as string;
      dispatch(onAddCalendar({ name, id }));
      //
      setTimeout(() => onNavigateToCalendar(id, name), 500);
    },
    [navigate],
  );
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.menuItemContainer}>
        <MenuItem title={'Create calendar'} onPress={() => setShowDialog(true)} />
        <Text style={styles.title}>{'Select Calendar to edit'}</Text>
        {createdCalendars &&
          Object.values(createdCalendars).map(calendar => {
            const { id, name } = calendar;
            return (
              <TouchableOpacity onPress={() => onNavigateToCalendar(id, name)}>
                <Text style={{ fontSize: 28, color: 'black' }}>{name}</Text>
              </TouchableOpacity>
            );
          })}
        <MenuItem title={'Go Back'} onPress={goBack} />
      </View>
      <DialogTextInput
        isVisible={showDialog}
        onHandleOk={onCreateCalendar}
        onHandleCancel={() => setShowDialog(false)}
      />
    </SafeAreaView>
  );
};

export default Settings;
