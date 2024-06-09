import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {TodoDetailScreenView} from './TodoDetailScreenView';
import {RootStackParamList} from '../../navigations/types';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useEffect, useState} from 'react';
import {useMMKVObject} from 'react-native-mmkv';
import {deleteTodo} from '../../redux/slice';
import {showDialog} from '../../components/DialogController';
import {View} from 'react-native';

export const TodoDetailScreen = () => {
  const route = useRoute<RouteProp<RootStackParamList, 'TodoDetailScreen'>>();
  const todoList = useSelector((state: RootState) => state.todoList);
  const item = todoList.find(todo => todo.id === route.params.id);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [isDone, setIsDone] = useState(false);
  const [doneIdArray, setDoneIdArray] = useMMKVObject<number[]>('doneIdArray');
  const dispatch = useDispatch();

  const onPressDelete = () => {
    dispatch(deleteTodo(route.params.id));
    navigation.pop();
  };
  const onPressEdit = () => {
    if (!isDone && item) {
      showDialog({id: item.id, content: item.content});
    }
  };
  const toggleDone = () => {
    if (!doneIdArray) {
      return;
    }
    if (!item) {
      return;
    }
    if (isDone) {
      setDoneIdArray(doneIdArray.filter(id => id !== item.id));
    } else {
      setDoneIdArray([...doneIdArray, item.id]);
    }
  };

  useEffect(() => {
    if (!doneIdArray) {
      setDoneIdArray([]);
      return;
    }
    if (!item) {
      return;
    }
    setIsDone(doneIdArray.some(id => id === item.id));
  }, [doneIdArray]);

  const props = {
    item: item,
    onPressDelete: onPressDelete,
    onPressEdit: onPressEdit,
    isDone: isDone,
    toggleDone: toggleDone,
  };

  return <TodoDetailScreenView {...props} />;
};
