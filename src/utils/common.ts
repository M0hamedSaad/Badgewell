import Toast from 'react-native-toast-message';

export const showToast = (
  title?: string,
  subTitle?: string,
  type?: string,
  autoHide?: boolean
) => {
  Toast.show({
    type: type,
    text1: title,
    text2: subTitle,
    visibilityTime: 2000,
    autoHide: autoHide,
  });
};
