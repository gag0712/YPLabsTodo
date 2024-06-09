import {createSlice} from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    counter: 0,
  },
  reducers: {
    incremented: state => {
      state.counter += 1;
    },
    decremented: state => {
      state.counter -= 1;
    },
  },
});

export const {incremented, decremented} = counterSlice.actions;
