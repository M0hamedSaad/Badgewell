import React, { FC, useState } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  Modal
} from 'react-native';
import { Text } from '../text';
import { COLORS, IMAGES, normalize } from '../../utils';
import FastImage from 'react-native-fast-image'
import { logout } from '../../redux/actions';
import { useNavigation } from '@react-navigation/core';
import { CommonActions } from '@react-navigation/native';
import { useDispatch } from 'react-redux';

interface Props {
  inputProps?: TextInputProps,
}

export const Search: FC<Props> = ({ inputProps }) => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const [visible, isVisible] = useState(false)
  const toggle = () => { isVisible(!visible) }

  const _log = async () => {
    await dispatch(logout());
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: 'AuthStack' }],
      }),
    );
  }
  return (
    <View style={[styles.container, inputProps?.style]}>
      <TouchableOpacity>
        <FastImage source={IMAGES.SEARCH} style={styles.iconStyle} />
      </TouchableOpacity>

      <TextInput
        style={[styles.input]}
        {...inputProps}
      />
      <TouchableOpacity onPress={toggle}>
        <FastImage source={IMAGES.MORE} style={styles.iconStyle} />
      </TouchableOpacity>

      <Modal
        transparent
        visible={visible}
        onRequestClose={toggle}
        animationType='fade'>

        <TouchableOpacity
          activeOpacity={.95}
          style={styles.overLay}
          onPress={toggle} />

        <View style={styles.optionContainer}>
          <TouchableOpacity onPress={_log}>
            <Text>Logout</Text>
          </TouchableOpacity>
        </View>

      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '95%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.BACKGROUND,
    elevation: 1,
    borderRadius: normalize(10),
    marginBottom: 1
  },
  input: {
    flex: 1,
    height: normalize(55),
    color: COLORS.DARK,
  },
  iconStyle: {
    width: normalize(25),
    height: normalize(25),
    marginHorizontal: normalize(10),
    // resizeMode: 'center',
  },
  overLay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  optionContainer: {
    padding: 15,
    marginTop: normalize(58),
    backgroundColor: COLORS.BACKGROUND,
    position: 'absolute',
    right: '2.5%',
    borderRadius: 5
  },
  row: {
    flexDirection: "row",
    alignItems: 'center'
  }
});
