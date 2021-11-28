import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Sign from '../screens/sign';
const Stack = createNativeStackNavigator();
const Auth = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: 'slide_from_right',
        headerShown: false,
      }}>
      <Stack.Screen name="Sign" component={Sign} />
    </Stack.Navigator>
  );
};
export default Auth;