import { StyleSheet } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import { COLORS, normalize } from '../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    alignItems: 'center',
    justifyContent: 'center'
  },

  sad: {
    width: normalize(200),
    height: normalize(200),
    alignSelf: 'center'
  },
  centerLoader: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: normalize(20)
  },
  card: {
    marginTop: hp(2),
    flexDirection: 'row',
    width: wp(95),
    alignSelf: 'center',
    backgroundColor: COLORS.WHITE,
    alignItems: 'center'
  },
  img: {
    width: wp(11),
    height: wp(11),
    borderRadius: wp(10),
    overflow: 'hidden',
    backgroundColor: COLORS.DARK,
    marginEnd: wp(2)
  },
  contentContainerStyle: {
    paddingBottom: normalize(40)
  },

  indicator: {
    alignSelf: 'center',
    marginBottom: normalize(10)
  }
});

export default styles;
