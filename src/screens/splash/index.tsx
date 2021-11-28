import React, { useEffect } from 'react';
import {
  View,
  SafeAreaView,
  Image,
  StatusBar
} from 'react-native';
import styles from './styles';
import { useSelector } from 'react-redux';
import {
  COLORS,
  IMAGES
} from '../../utils';
import * as Animatable from 'react-native-animatable';
const { createAnimatableComponent } = Animatable;
const AnimatableView = createAnimatableComponent(View);
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from "../../navigation/StackNavigator";
import { useNavigation } from '@react-navigation/core';
type splashScreenProp = NativeStackNavigationProp<RootStackParamList, "Splash">;

const Splash = () => {
  const user = useSelector((state: any) => state.userState.user);
  const navigation = useNavigation<splashScreenProp>()
  useEffect(() => {
    const timer = setTimeout(() => {
      if (user) navigation.replace('HomeStack')
      else navigation.replace('AuthStack')
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={COLORS.PRIMARY} barStyle='light-content' />
      <AnimatableView animation={'pulse'}>
        <Image source={IMAGES.LOGO} style={styles.logo} />
      </AnimatableView>
    </SafeAreaView>
  );
};
export default Splash;
