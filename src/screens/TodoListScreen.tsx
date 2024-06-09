import {Pressable, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState, useAppDispatch} from '../redux/store';
import {showDialog} from '../components/DialogController';
import {useEffect} from 'react';
import {getTodoList} from '../redux/slice/todoSlice';

export const TodoListScreen = () => {
  const todoState = useSelector((state: RootState) => state.todoList);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTodoList());
  }, []);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Todo List Screen{}</Text>
      <Text></Text>
      <Pressable
        onPress={() => {
          showDialog();
        }}>
        <Text>show</Text>
      </Pressable>
    </View>
  );
};
