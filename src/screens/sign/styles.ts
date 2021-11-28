import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { COLORS } from '../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
  },
  logo: {
    marginVertical: hp(5),
    width: wp(80),
    height: hp(9),
    resizeMode: 'contain',
    alignSelf: 'center'
  },
  btn: {
    marginTop: hp(10)
  }
});

export default styles;
