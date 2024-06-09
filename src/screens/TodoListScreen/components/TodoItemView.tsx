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

type TTodoItemViewProps = {
  item: TTodo;
  onPressItem: () => void;
  onPressDelete: () => void;
  onPressEdit: () => void;
};

export const TodoItemView = ({
  item,
  onPressItem,
  onPressDelete,
  onPressEdit,
}: TTodoItemViewProps) => {
  const window = useWindowDimensions();
  const width = window.width - gap.large * 2 - gap.small * 2;
  const [buttonContainerWidth, setButtonContainerWidth] = useState(0);

  return (
    <Pressable style={styles.container} onPress={onPressItem}>
      <View style={{width: width - buttonContainerWidth}}>
        <Text numberOfLines={5} ellipsizeMode="tail" style={styles.contentText}>
          {item.content}
        </Text>
      </View>
      <View
        style={styles.buttonContainer}
        onLayout={event => {
          setButtonContainerWidth(event.nativeEvent.layout.width);
        }}>
        <Pressable style={styles.buttonComplete}>
          <Text>완료</Text>
        </Pressable>
        <Pressable onPress={onPressDelete} style={styles.buttonDelete}>
          <Text>삭제</Text>
        </Pressable>
        <Pressable onPress={onPressEdit} style={styles.buttonComplete}>
          <Text>수정</Text>
        </Pressable>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: borderRadius,
    padding: gap.small,
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
  buttonContainer: {
    gap: gap.small,
    flexDirection: 'row',
  },
  buttonComplete: {
    width: 30,
    height: 48,
    borderRadius: borderRadius,
    backgroundColor: color.background.quaternary,
    alignItems: 'center',
    justifyContent: 'center',
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
});
