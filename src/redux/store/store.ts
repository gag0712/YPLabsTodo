import {configureStore} from '@reduxjs/toolkit';
import {counterSlice} from '../slice';
import {useDispatch} from 'react-redux';

export const store = configureStore({
  reducer: counterSlice.reducer,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
