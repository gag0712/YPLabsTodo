import {
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import {borderRadius, color, fontSize, gap} from '../../../constants/style';
import {TTodo} from '../../../constants/types';
import {useState} from 'react';
import {Toggle} from './Toggle';

type TTodoItemViewProps = {
  item: TTodo;
  onPressItem: () => void;
  onPressDelete: () => void;
  onPressEdit: () => void;
  isDone: boolean;
  toggleDone: () => void;
};

export const TodoItemView = ({
  item,
  onPressItem,
  onPressDelete,
  onPressEdit,
  isDone,
  toggleDone,
}: TTodoItemViewProps) => {
  const window = useWindowDimensions();
  const width = window.width - gap.large * 2 - gap.medium * 4;
  const [buttonContainerWidth, setButtonContainerWidth] = useState(0);

  return (
    <Pressable style={styles.container} onPress={onPressItem}>
      <View style={{width: width - buttonContainerWidth}}>
        <Text
          numberOfLines={5}
          ellipsizeMode="tail"
          style={[styles.contentText, isDone && styles.doneText]}>
          {item.content}
        </Text>
      </View>
      <View
        style={styles.buttonContainer}
        onLayout={event => {
          setButtonContainerWidth(event.nativeEvent.layout.width);
        }}>
        <Toggle value={isDone} toggle={toggleDone} />
        <Pressable onPress={onPressDelete} style={styles.buttonDelete}>
          <Text>삭제</Text>
        </Pressable>
        <Pressable onPress={onPressEdit} style={styles.buttonEdit}>
          <Text style={styles.textEdit}>수정</Text>
        </Pressable>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: borderRadius,
    paddingVertical: gap.small,
    paddingHorizontal: gap.medium,
    flexDirection: 'row',
    flex: 1,
    backgroundColor: color.background.secondary,
    alignItems: 'center',
    minHeight: 48,
    justifyContent: 'space-between',
  },
  contentText: {
    fontSize: fontSize.large,
    color: color.text.primary,
  },
  doneText: {
    textDecorationLine: 'line-through',
    color: color.text.tertiary,
  },
  buttonContainer: {
    gap: gap.medium,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonEdit: {
    width: 30,
    height: 48,
    borderRadius: borderRadius,
    backgroundColor: color.background.tertiary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonDelete: {
    width: 30,
    height: 48,
    borderRadius: borderRadius,
    backgroundColor: color.text.error,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textEdit: {
    color: color.text.primary,
  },
});
