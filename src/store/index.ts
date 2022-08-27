import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';

import { calendarSlice } from './calendarSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PersistConfig } from 'redux-persist/es/types';

const persistConfig: PersistConfig<any> = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['calendar'],
};

const rootReducer = combineReducers({
  calendar: calendarSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

let store = configureStore({ reducer: persistedReducer });
let persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store, persistor };
