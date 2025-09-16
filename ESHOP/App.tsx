import React, { FC, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { SafeAreaView } from 'react-native-safe-area-context';
import UserNavigation from './src/navigation/UserNavigation';
import { getSecureToken } from './src/utils/secureStorage';
import { loginSuccess } from './src/redux/authSlice';
import MainStack from './src/navigation/MainStack';

interface Props {}

const AppContent: FC = () => {
  useEffect(() => {
    const loadStoredAuth = async () => {
      const authData = await getSecureToken();
      if (authData) {
        store.dispatch(loginSuccess(authData));
      }
    };
    loadStoredAuth();
  }, []);

  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

const App: FC<Props> = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Provider store={store}>
        <AppContent />
      </Provider>
    </SafeAreaView>
  );
};

export default App;
