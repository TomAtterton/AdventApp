import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './src/navigation';
import { Provider } from 'react-redux';
import { persistor, store } from './src/store';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { PersistGate } from 'redux-persist/integration/react';
import React, { useEffect, useState } from 'react';
import { setupGiphy } from './src/utils/giphyUtils';
import AppProvider from './src/providers';
import SplashScreen from './src/pages/SplashScreen/SplashScreen';
import SplashScreenAPI from 'react-native-splash-screen';

export default function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setupGiphy();

    SplashScreenAPI.hide();
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <NavigationContainer>
              <AppProvider>{isLoading ? <SplashScreen /> : <MainNavigation />}</AppProvider>
            </NavigationContainer>
          </PersistGate>
        </Provider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
