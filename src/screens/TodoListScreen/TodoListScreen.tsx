import {useSelector} from 'react-redux';
import {RootState, useAppDispatch} from '../../redux/store';
import {useEffect} from 'react';
import {getTodoList, refetchTodo} from '../../redux/slice/todoSlice';
import {TodoListScreenView} from './TodoListScreenView';
import {showDialog} from '../../components/DialogController';

export const TodoListScreen = () => {
  const todoList = useSelector((state: RootState) => state.todoList);
  const isLoading = useSelector((state: RootState) => state.isLoading);
  const dispatch = useAppDispatch();

  const fetchTodoList = () => {
    dispatch(getTodoList());
  };

  const refetchTodoList = () => {
    dispatch(refetchTodo());
  };

  const onPressAdd = () => {
    showDialog();
  };

  useEffect(() => {
    fetchTodoList();
  }, []);

  const props = {
    todoList: todoList,
    onPressAdd: onPressAdd,
    onEndReached: fetchTodoList,
    isLoading: isLoading,
    refetchTodo: refetchTodoList,
  };

  return <TodoListScreenView {...props} />;
};
