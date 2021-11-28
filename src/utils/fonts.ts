import { Platform } from 'react-native'
export const FONTS = {
    BOLD: Platform.OS == 'ios' ? '' : 'NunitoSans-Bold',
    REGULAR: Platform.OS == 'ios' ? '' : 'NunitoSans-Regular'
};
