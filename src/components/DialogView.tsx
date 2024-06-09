import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {borderRadius, color, fontSize, gap} from '../constants/style';
import Animated, {SlideInDown, SlideOutDown} from 'react-native-reanimated';
import {Dispatch, SetStateAction} from 'react';

type TDialogViewProps = {
  modalVisible: boolean;
  closeModal: () => void;
  todoContent: string;
  setTodoContent: Dispatch<SetStateAction<string>>;
  onPressSave: () => void;
};

export const DialogView = ({
  modalVisible,
  closeModal,
  todoContent,
  setTodoContent,
  onPressSave,
}: TDialogViewProps) => {
  return (
    <Modal transparent={true} visible={modalVisible}>
      <Pressable
        onPress={() => {
          closeModal();
        }}
        style={styles.centeredView}>
        <Animated.View
          entering={SlideInDown}
          exiting={SlideOutDown}
          style={styles.modalView}>
          <View style={styles.widthFull}>
            <Text style={styles.modalTitle}>TODO 만들기</Text>
          </View>
          <View style={styles.widthFull}>
            <View style={styles.containerTextInput}>
              <TextInput
                placeholderTextColor={color.text.tertiary}
                onChangeText={setTodoContent}
                value={todoContent}
                style={styles.textInput}
              />
            </View>
          </View>
          <View style={styles.buttonContainer}>
            <Pressable
              style={styles.buttonSecondary}
              onPress={() => {
                closeModal();
              }}>
              <Text style={{color: color.text.primary}}>취소</Text>
            </Pressable>
            <Pressable
              style={styles.buttonPrimary}
              onPress={() => {
                onPressSave();
                closeModal();
              }}>
              <Text style={{color: color.text.inversePrimary}}>저장</Text>
            </Pressable>
          </View>
        </Animated.View>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    backgroundColor: color.overlay.primary,
  },
  modalView: {
    width: '100%',
    padding: gap.large,
    backgroundColor: color.background.secondary,
    borderRadius: borderRadius,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    gap: gap.medium,
  },
  widthFull: {
    width: '100%',
    flexDirection: 'row',
  },
  modalTitle: {
    color: color.text.primary,
    fontSize: fontSize.large,
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    height: 48,
    gap: gap.medium,
  },
  buttonPrimary: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: borderRadius,
    backgroundColor: color.background.accent,
  },
  buttonSecondary: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: borderRadius,
    backgroundColor: color.background.quaternary,
  },
  containerTextInput: {
    padding: gap.small,
    height: 48,
    width: '100%',
    borderRadius: borderRadius,
    justifyContent: 'space-between',
    borderColor: color.border.secondary,
    borderWidth: 1,
    flexDirection: 'row',
  },
  textInput: {
    padding: 0,
    color: color.text.primary,
    flex: 1,
    fontSize: fontSize.medium,
    lineHeight: 18,
  },
});
