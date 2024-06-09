import {Pressable, StyleSheet, View} from 'react-native';
import {color} from '../constants/style';

type TTogleProps = {
  value: boolean;
  toggle: () => void;
};

export const Toggle = ({value, toggle}: TTogleProps) => {
  return (
    <Pressable onPress={toggle} style={styles.toggleContainer}>
      {value ? <View style={styles.toggleOn} /> : null}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  toggleContainer: {
    width: 30,
    height: 30,
    borderColor: color.border.primary,
    borderWidth: 2,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  toggleOn: {
    width: 20,
    height: 20,
    borderRadius: 100,
    backgroundColor: color.border.primary,
  },
});
