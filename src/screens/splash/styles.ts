import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { COLORS } from '../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: wp(80),
    resizeMode: 'contain',
  },
});

export default styles;
