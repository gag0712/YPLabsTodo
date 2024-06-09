import {Pressable, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState, useAppDispatch} from '../redux/store';
import {decremented, incremented} from '../redux/slice';

export const TodoListScreen = () => {
  const counterState = useSelector((state: RootState) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Todo List Screen{counterState}</Text>
      <Text></Text>
      <Pressable
        onPress={() => {
          dispatch(incremented());
        }}>
        <Text>+</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          dispatch(decremented());
        }}>
        <Text>-</Text>
      </Pressable>
    </View>
  );
};
