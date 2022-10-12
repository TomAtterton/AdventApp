import React, { useCallback, useEffect, useState } from 'react';
import styles from './settings.style';
import { View } from 'react-native';
import MenuItem from './MenuItem';
import { useNavigation } from '@react-navigation/native';
import Pages from '../../enum/Pages';
import DialogTextInput from '../../components/DialogTextInput';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import { onAddCalendar, onSelectCalendar } from '../../store/calendarSlice';
import uuid from 'react-native-uuid';
import Collapsible from 'react-native-collapsible';

import { SafeAreaView } from 'react-native-safe-area-context';
import { fetchCalendars } from '../../utils/firebaseUtils';
import CalendarList from './CalendarList/CalendarList';

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

  const [showEditCalendars, setShowEditCalendars] = useState(false);
  const [showSelectCalendars, setShowSelectCalendars] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.menuItemContainer}>
        <MenuItem
          title={'Create calendar'}
          onPress={() => setShowDialog(true)}
          iconName={'right'}
        />
        <View style={{ height: 16 }} />
        <MenuItem
          title={'Edit calendar'}
          onPress={() => setShowEditCalendars(!showEditCalendars)}
          iconName={!showEditCalendars ? 'down' : 'up'}
        />
        <Collapsible collapsed={!showEditCalendars}>
          <CalendarList
            calendars={createdCalendars}
            onPress={(id, name) => onNavigateToCalendar(id, name)}
          />
        </Collapsible>
        <View style={{ height: 16 }} />
        <MenuItem
          title={'Select calendar'}
          onPress={() => setShowSelectCalendars(!showSelectCalendars)}
          iconName={!showSelectCalendars ? 'down' : 'up'}
        />
        <Collapsible collapsed={!showSelectCalendars}>
          <CalendarList
            calendars={createdCalendars}
            onPress={id => {
              dispatch(onSelectCalendar({ id }));
              goBack();
            }}
          />
        </Collapsible>
        <View style={{ height: 16 }} />
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
