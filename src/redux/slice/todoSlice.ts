import {createSlice} from '@reduxjs/toolkit';
import {TTodo} from '../../constants/types';

type TInitialState = {
  todoList: TTodo[];
  isLoading: boolean;
  error: string | null;
};

export const initialState: TInitialState = {
  todoList: [],
  isLoading: false,
  error: null,
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState: initialState,
  reducers: {
    getTodoListSuccess: (state, action: {payload: TTodo[]}) => {
      state.isLoading = true;
      const newState = state.todoList.concat(action.payload);
      state.todoList = newState;
    },
    getTodoListFailure: (state, {payload: error}) => {
      state.isLoading = false;
      state.error = error;
    },
    getTodoList: (state, action: {payload: undefined}) => {
      state.isLoading = false;
    },
  },
});

export const {getTodoList} = todoSlice.actions;
