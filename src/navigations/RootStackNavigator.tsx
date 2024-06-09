import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TodoListScreen} from '../screens';
import {RootStackParamList} from './types';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const RootStackNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name="TodoListScreen" component={TodoListScreen} />
    </RootStack.Navigator>
  );
};
