import React, { FC } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import { Text } from '../text';
import { COLORS, FONTS, normalize, WIDTH } from '../../utils';

interface Props {
  tab?: number,
  setTab?: any,
}
export const Tabs: FC<Props> = ({ tab, setTab }) => {
  return (
    <View style={[styles.container]}>
      <TouchableOpacity
        activeOpacity={.75}
        onPress={() => setTab(0)}
        style={[styles.tab, {
          borderBottomWidth: tab == 0 ? 3 : 0,
        }]}>
        <Text
          size={normalize(20)}
          color={tab == 0 ? COLORS.DARK : COLORS.GRAY}
          type={tab == 0 ? FONTS.BOLD : FONTS.REGULAR}>
          {'Log In'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => setTab(1)}
        style={[styles.tab, {
          borderBottomWidth: tab == 1 ? 3 : 0,
        }]}>
        <Text
          size={normalize(20)}
          color={tab == 1 ? COLORS.DARK : COLORS.GRAY}
          type={tab == 1 ? FONTS.BOLD : FONTS.REGULAR}>
          {'Sign Up'}
        </Text>
      </TouchableOpacity>
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    flexDirection: 'row',
    backgroundColor: COLORS.BACKGROUND,
  },
  tab: {
    width: WIDTH / 2,
    height: normalize(66),
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: COLORS.PRIMARY
  }
});
