import {
  FlatList,
  Pressable,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {TTodo} from '../../constants/types';
import {borderRadius, color, fontSize, gap} from '../../constants/style';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TodoItem} from './components/TodoItem';

type TTodoListScreenViewProps = {
  todoList: TTodo[];
  onPressAdd: () => void;
  onEndReached: () => void;
  isLoading: boolean;
};

export const TodoListScreenView = ({
  todoList,
  onPressAdd,
  onEndReached,
  isLoading,
}: TTodoListScreenViewProps) => {
  return (
    <SafeAreaView edges={['bottom', 'left', 'right']} style={styles.container}>
      <FlatList
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={onEndReached}
            tintColor={color.text.primary}
          />
        }
        data={todoList}
        contentContainerStyle={styles.flatListContentContainer}
        renderItem={({item}) => <TodoItem item={item} />}
        onEndReached={onEndReached}
      />
      <View style={styles.addButtonContainer}>
        <Pressable style={styles.addButton} onPress={onPressAdd}>
          <Text style={styles.addButtonText}>추가하기</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: color.background.primary},
  flatListContentContainer: {
    gap: gap.medium,
    paddingHorizontal: gap.large,
  },
  addButtonContainer: {
    padding: gap.large,
    gap: gap.medium,
    height: 80,
  },
  addButton: {
    padding: gap.medium,
    borderRadius: borderRadius,
    backgroundColor: color.background.accent,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  addButtonText: {
    color: color.text.inversePrimary,
    fontSize: fontSize.large,
  },
});
