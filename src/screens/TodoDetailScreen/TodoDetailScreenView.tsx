import {Pressable, StyleSheet, Text, View} from 'react-native';
import {borderRadius, color, fontSize, gap} from '../../constants/style';
import {TTodo} from '../../constants/types';
import {Toggle} from '../../components/Toggle';

type TTodoDetailScreenViewProp = {
  item: TTodo | undefined;
  onPressDelete: () => void;
  onPressEdit: () => void;
  isDone: boolean;
  toggleDone: () => void;
};

export const TodoDetailScreenView = ({
  item,
  onPressDelete,
  onPressEdit,
  isDone,
  toggleDone,
}: TTodoDetailScreenViewProp) => {
  if (!item) {
    return <View style={styles.container} />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Toggle value={isDone} toggle={toggleDone} />
        <Pressable onPress={onPressDelete} style={styles.buttonDelete}>
          <Text>삭제</Text>
        </Pressable>
        <Pressable onPress={onPressEdit} style={styles.buttonEdit}>
          <Text style={styles.textEdit}>수정</Text>
        </Pressable>
      </View>
      <View style={styles.contentContainer}>
        <Text
          numberOfLines={5}
          ellipsizeMode="tail"
          style={[styles.contentText, isDone && styles.doneText]}>
          {item.content}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.background.primary,
    padding: gap.large,
    gap: gap.large,
  },
  contentContainer: {
    backgroundColor: color.background.secondary,
    borderRadius: borderRadius,
    padding: gap.large,
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
