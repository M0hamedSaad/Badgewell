import React, { FC, useState } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  TextInputProps
} from 'react-native';
import { Text } from '../text';
import { COLORS, IMAGES, normalize } from '../../utils';
import FastImage from 'react-native-fast-image'

interface Props {
  password?: boolean,
  label?: string,
  inputProps?: TextInputProps,
}

export const Input: FC<Props> = ({
  password,
  label,
  inputProps
}) => {
  const [secure, setSecure] = useState(true)
  return (
    <View style={styles.container}>
      <Text>{label}</Text>

      <View style={[styles.row_center, inputProps?.style]}>
        <TextInput
          style={[styles.input]}
          {...inputProps}
          secureTextEntry={password ? secure : false}
        />

        {password &&
          <TouchableOpacity onPress={() => { setSecure(!secure) }}>
            <FastImage
              resizeMode={'contain'}
              source={secure ? IMAGES.EYE_OFF : IMAGES.EYE_ON}
              style={styles.iconStyle} />
          </TouchableOpacity>
        }
      </View>
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: normalize(35),
    width: '100%',
  },
  row_center: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: normalize(10),
    flex: 1,
    backgroundColor: COLORS.BACKGROUND,
    elevation: 1,
    borderRadius: normalize(10),
    marginBottom: 1

  },
  input: {
    flex: 1,
    height: normalize(55),
    overflow: 'hidden',
    borderRadius: normalize(10),
    color: COLORS.DARK,
    paddingHorizontal: normalize(20)
  },
  iconStyle: {
    width: normalize(22),
    height: normalize(22),
    marginEnd: normalize(20)
  },
});
