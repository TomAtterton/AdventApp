import { createSlice } from '@reduxjs/toolkit';
import { advent, defaultAdvent, emptyAdvent } from '../config/adventConfig';

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
      state.createdCalendars = {
        ...state.createdCalendars,
        [id]: { id, name, data: emptyAdvent },
      };
    },
    onUpdateCalendarItem: (state, { payload: { id, day, type, value, message } }) => {
      state.createdCalendars[id].data[day - 1] = {
        day,
        message,
        type,
        value,
      };
    },
  },
});

export const { onAddCalendar, onUpdateCalendarItem } = calendarSlice.actions;

export default calendarSlice.reducer;
