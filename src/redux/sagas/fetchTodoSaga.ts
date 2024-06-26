import {call, delay, put, takeEvery} from 'redux-saga/effects';
import {API} from '../../services/todo';
import {TTodo} from '../../constants/types';
import {isAxiosError} from 'axios';
import {todoSlice} from '../slice/todoSlice';

export function* fetchTodo() {
  try {
    delay(1000);
    const todoList: TTodo[] = yield call(API.getTodoList);
    const {getTodoListSuccess} = todoSlice.actions;
    yield put(getTodoListSuccess(todoList));
  } catch (e) {
    if (isAxiosError(e)) {
      const {getTodoListFailure} = todoSlice.actions;
      yield put(getTodoListFailure(e.message));
    }
  }
}

export function* fetchTodoSaga() {
  const {getTodoList, postTodo, updateTodo, deleteTodo, refetchTodo} =
    todoSlice.actions;
  yield takeEvery(getTodoList, fetchTodo);
  yield takeEvery(postTodo, fetchTodo);
  yield takeEvery(updateTodo, fetchTodo);
  yield takeEvery(deleteTodo, fetchTodo);
  yield takeEvery(refetchTodo, fetchTodo);
}
