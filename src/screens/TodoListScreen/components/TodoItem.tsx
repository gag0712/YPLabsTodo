import {useNavigation} from '@react-navigation/native';
import {TTodo} from '../../../constants/types';
import {TodoItemView} from './TodoItemView';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../navigations/types';
import {useDispatch} from 'react-redux';
import {deleteTodo} from '../../../redux/slice';
import {showDialog} from '../../../components/DialogController';
import {useState} from 'react';

type TTodoItemProps = {
  item: TTodo;
};

export const TodoItem = ({item}: TTodoItemProps) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [isDone, setIsDone] = useState(false);
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
    setIsDone(v => !v);
  };
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
