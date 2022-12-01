import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { advent, defaultAdvent, emptyAdvent } from '../config/adventConfig';
import { addCalendar, fetchAllCalendars, updateCalendar } from '../utils/firebaseUtils';

interface CalendarState {
  currentCalendarId?: string;
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
  currentCalendarId: undefined,
  currentCalendar: defaultAdvent,
  createdCalendars: {},
};

export const onFetchAllCalendars = createAsyncThunk('counter/onFetchAllCalendars', async arg => {
  const calendars = await fetchAllCalendars();

  if (calendars && calendars.length > 0) {
    return calendars.reduce((obj, cur) => {
      return { ...obj, [cur.id]: cur };
    }, {});
  }
  return null;
});

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
    onSyncCalendar: (state, { payload: { data } }) => {
      state.currentCalendar = data;
    },
    onSelectCalendar: (state, { payload: { id } }) => {
      state.currentCalendarId = id;
      state.currentCalendar = state.createdCalendars[id].data;
    },
  },
  extraReducers: builder => {
    builder.addCase(onFetchAllCalendars.fulfilled, (state, action) => {
      if (action.payload) {
        state.createdCalendars = action.payload;
      }
    });
  },
});

export const { onAddCalendar, onUpdateCalendarItem, onSelectCalendar, onSyncCalendar } =
  calendarSlice.actions;

export default calendarSlice.reducer;
