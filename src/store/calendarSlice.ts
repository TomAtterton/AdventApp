import { createSlice } from '@reduxjs/toolkit';
import { advent, defaultAdvent, emptyAdvent } from '../config/adventConfig';
import { addCalendar, updateCalendar } from '../utils/firebaseUtils';

interface CalendarState {
  currentCalendar: advent[];
  createdCalendars: {
    [key: string]: {
      id: string;
      name: string;
      data: advent[];
    }[];
  };
}

const initialState: CalendarState = {
  currentCalendar: defaultAdvent,
  createdCalendars: {},
};

export const calendarSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    onAddCalendar: (state, { payload: { name, id } }) => {
      addCalendar({
        id,
        name,
        advent: emptyAdvent,
      }).then(r => console.log('r', r));

      state.createdCalendars = {
        ...state.createdCalendars,
        [id]: { id, name, data: emptyAdvent },
      };
    },
    onUpdateCalendarItem: (state, { payload: { id, day, type, value, message } }) => {
      const dayValue = day - 1;

      updateCalendar({
        id,
        day,
        message,
        type,
        value,
      });

      state.createdCalendars[id].data[dayValue] = {
        day,
        message,
        type,
        value,
      };
    },
    onSyncCalendar: (state, { payload: { id, data } }) => {
      state.createdCalendars = {
        ...state.createdCalendars,
        [id]: data,
      };
    },
    onSelectCalendar: (state, { payload: { id } }) => {
      state.currentCalendar = state.createdCalendars[id].data;
    },
  },
});

export const { onAddCalendar, onUpdateCalendarItem, onSelectCalendar } = calendarSlice.actions;

export default calendarSlice.reducer;
