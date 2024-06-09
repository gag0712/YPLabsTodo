import {useNavigation} from '@react-navigation/native';
import {TTodo} from '../../../constants/types';
import {TodoItemView} from './TodoItemView';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../navigations/types';
import {useDispatch} from 'react-redux';
import {deleteTodo} from '../../../redux/slice';
import {showDialog} from '../../../components/DialogController';

type TTodoItemProps = {
  item: TTodo;
};

export const TodoItem = ({item}: TTodoItemProps) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const dispatch = useDispatch();
  const onPressItem = () => {
    navigation.navigate('TodoDetailScreen', {id: item.id});
  };
  const onPressDelete = () => {
    dispatch(deleteTodo(item.id));
  };
  const onPressEdit = () => {
    showDialog({id: item.id, content: item.content});
  };
  const props = {
    item: item,
    onPressItem: onPressItem,
    onPressDelete: onPressDelete,
    onPressEdit: onPressEdit,
  };
  return <TodoItemView {...props} />;
};
