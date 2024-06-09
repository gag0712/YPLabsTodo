import {createSlice} from '@reduxjs/toolkit';
import {TTodo} from '../../constants/types';
import {API} from '../../services/todo';

type TInitialState = {
  todoList: TTodo[];
  isLoading: boolean;
  error: string | null;
};

type TUpdateTodoParam = {
  id: number;
  content: string;
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
      const length = Math.floor(state.todoList.length / 10);
      const paginationState = action.payload
        .reverse()
        .slice(0, (length + 1) * 10);
      state.todoList = paginationState;
    },
    getTodoListFailure: (state, {payload: error}) => {
      state.isLoading = false;
      state.error = error;
    },
    getTodoList: (state, action: {payload: undefined}) => {
      state.isLoading = false;
    },
    postTodo: (state, action: {payload: string}) => {
      state.todoList = [];
      API.postTodo(action.payload);
    },
    updateTodo: (state, action: {payload: TUpdateTodoParam}) => {
      state.todoList = [];
      API.updateTodo(action.payload.id, action.payload.content);
    },
    deleteTodo: (state, action: {payload: number}) => {
      state.todoList = [];
      API.deleteTodo(action.payload);
    },
  },
});

export const {getTodoList, postTodo, updateTodo, deleteTodo} =
  todoSlice.actions;
