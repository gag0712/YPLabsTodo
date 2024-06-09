import {useNavigation} from '@react-navigation/native';
import {TTodo} from '../../../constants/types';
import {TodoItemView} from './TodoItemView';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../navigations/types';
import {useDispatch} from 'react-redux';
import {deleteTodo} from '../../../redux/slice';
import {showDialog} from '../../../components/DialogController';
import {useEffect, useState} from 'react';
import {useMMKVObject} from 'react-native-mmkv';

type TTodoItemProps = {
  item: TTodo;
};

export const TodoItem = ({item}: TTodoItemProps) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [isDone, setIsDone] = useState(false);
  const [doneIdArray, setDoneIdArray] = useMMKVObject<number[]>('doneIdArray');

  const dispatch = useDispatch();
  const onPressItem = () => {
    navigation.navigate('TodoDetailScreen', {id: item.id});
  };
  const onPressDelete = () => {
    dispatch(deleteTodo(item.id));
  };
  const onPressEdit = () => {
    if (!isDone) {
      showDialog({id: item.id, content: item.content});
    }
  };
  const toggleDone = () => {
    if (!doneIdArray) {
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
    setIsDone(doneIdArray.some(id => id === item.id));
  }, [doneIdArray]);

  const props = {
    item: item,
    onPressItem: onPressItem,
    onPressDelete: onPressDelete,
    onPressEdit: onPressEdit,
    isDone: isDone,
    toggleDone: toggleDone,
  };

  return <TodoItemView {...props} />;
};
