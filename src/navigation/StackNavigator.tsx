import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../screens/splash';
import AuthStack from './AuthStack';
import HomeStack from './HomeStack';

export type RootStackParamList = {
  Splash: undefined;
  AuthStack: undefined;
  HomeStack: undefined;
};
const Stack = createNativeStackNavigator<RootStackParamList>();
export const Navigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      animation: 'slide_from_left',
      headerShown: false,
    }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="AuthStack" component={AuthStack} />
      <Stack.Screen name="HomeStack" component={HomeStack} />
    </Stack.Navigator>
  );
};
export default Navigator;