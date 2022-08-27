import React, { useCallback, useState } from 'react';
import styles from './settings.style';
import { Linking, Text, TouchableOpacity, View } from 'react-native';
import MenuItem from './MenuItem';
import { useNavigation } from '@react-navigation/native';
import Pages from '../../enum/Pages';
import DialogTextInput from '../../components/DialogTextInput';
import { useAppDispatch, useAppSelector } from '../../utils/hooks';
import { onAddCalendar } from '../../store/calendarSlice';
import uuid from 'react-native-uuid';
import RNShare from 'react-native-share';
import DocumentPicker, {
  DirectoryPickerResponse,
  DocumentPickerResponse,
  isInProgress,
  types,
} from 'react-native-document-picker';
import { onShareFile } from '../../utils/shareUtils';

interface Props {}

const Settings = ({}: Props) => {
  const { navigate } = useNavigation();

  const [showDialog, setShowDialog] = useState(false);

  const dispatch = useAppDispatch();
  const createdCalendars = useAppSelector(state => state.calendar.createdCalendars);

  const onNavigateToCalendar = useCallback(
    (id, name) =>
      navigate({
        name: Pages.CREATE_CALENDAR,
        params: { id, name },
      }),
    [],
  );

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
  console.log('This is a testy test', createdCalendars);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{'Settings'}</Text>
      <View style={styles.menuItemContainer}>
        <MenuItem title={'Create calendar'} onPress={() => setShowDialog(true)} />
        {createdCalendars &&
          Object.values(createdCalendars).map(calendar => {
            console.log('Calendar', calendar);
            const { id, name } = calendar;
            return (
              <TouchableOpacity onPress={() => onNavigateToCalendar(id, name)}>
                <Text style={{ fontSize: 28, color: 'black' }}>{name}</Text>
              </TouchableOpacity>
            );
          })}
        <MenuItem title={'Share calendar'} onPress={() => onShareFile(createdCalendars)} />
        <MenuItem
          title={'Import calendar from files'}
          onPress={async () => {
            const pickerResult = await DocumentPicker.pickSingle({
              presentationStyle: 'fullScreen',
              type: [DocumentPicker.types.plainText],
              mode: 'import',
              copyTo: 'cachesDirectory',
            });
              console.log('This is the result', pickerResult)
          }}
        />
        <MenuItem
          title={'Import calendar from Text'}
          onPress={async () => {
            const pickerResult = await DocumentPicker.pickSingle({
              presentationStyle: 'fullScreen',
              copyTo: 'cachesDirectory',
            });
          }}
        />
      </View>
      <DialogTextInput
        isVisible={showDialog}
        onHandleOk={onCreateCalendar}
        onHandleCancel={() => setShowDialog(false)}
      />
    </View>
  );
};

export default Settings;
