import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../utils/hooks';
import firestore from '@react-native-firebase/firestore';
import { onSyncCalendar } from '../store/calendarSlice';

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAppDispatch();
  const currentCalendarId = useAppSelector(state => state.calendar.currentCalendarId);
  useEffect(() => {
    if (currentCalendarId) {
      const subscriber = firestore()
        .collection('calendars')
        .doc(currentCalendarId)
        .onSnapshot(snapshot => {
          const data = snapshot.data();
          if (data) {
            dispatch(onSyncCalendar({ data: Object.values(data) }));
          }
        });
      // Unsubscribe from events when no longer in use
      return () => subscriber();
    }
  }, [currentCalendarId]);

  return <>{children}</>;
};

export default AppProvider;
