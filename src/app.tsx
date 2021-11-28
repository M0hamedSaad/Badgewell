import React from "react";
import { Provider } from "react-redux";
import { LogBox, StatusBar } from "react-native";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import StackNavigator from "./navigation/StackNavigator";
import Toast from 'react-native-toast-message'
import { NavigationContainer } from '@react-navigation/native';
import { COLORS } from "./utils";

const App = () => {
  LogBox.ignoreAllLogs(true);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar backgroundColor={COLORS.WHITE} barStyle='dark-content' />
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
        <Toast />
      </PersistGate>
    </Provider>
  );
};

export default App;
