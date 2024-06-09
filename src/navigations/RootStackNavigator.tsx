import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TodoListScreen, TodoDetailScreen} from '../screens';
import {RootStackParamList} from './types';
import {color, fontSize} from '../constants/style';

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const RootStackNavigator = () => {
  return (
    <RootStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: color.background.primary,
        },
        headerTitleStyle: {
          fontSize: fontSize.large,
          color: color.text.primary,
        },
      }}>
      <RootStack.Screen name="TodoListScreen" component={TodoListScreen} />
      <RootStack.Screen name="TodoDetailScreen" component={TodoDetailScreen} />
    </RootStack.Navigator>
  );
};
