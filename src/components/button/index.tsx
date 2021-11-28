import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  ViewStyle,
  TextStyle
} from 'react-native';
import { Text } from '../text';
import { COLORS, FONTS, normalize } from '../../utils';

interface Props {
  title?: string,
  center?: boolean,
  onPress?: () => void,
  loading?: boolean,
  style?: ViewStyle,
  disabled?: boolean,
  width?: any,
  textStyle?: TextStyle
}
export const Button: React.FC<Props> = ({
  title,
  onPress,
  center,
  loading,
  style,
  disabled,
  width,
  textStyle
}) => {

  return (
    <TouchableOpacity
      activeOpacity={.75}
      disabled={disabled ? true : loading ? true : false}
      style={[styles.buttonContainer, style, { width }, { alignSelf: center ? 'center' : 'auto' }]}
      onPress={onPress}>

      {loading == true ? <ActivityIndicator color={'#fff'} size="small" />
        :
        <Text
          center
          color={COLORS.WHITE}
          type={FONTS.BOLD}
          size={normalize(18)}
          style={textStyle}>
          {title}
        </Text>
      }
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: COLORS.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: normalize(10),
    height: normalize(57),
    width: '100%'
  },
});
