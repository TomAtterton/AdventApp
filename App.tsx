import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './src/navigation';
import { Provider } from 'react-redux';
import { persistor, store } from './src/store';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { PersistGate } from 'redux-persist/integration/react';
import { useEffect } from 'react';
import { setupGiphy } from './src/utils/giphyUtils';
import AppProvider from './src/providers';

export default function App() {
  useEffect(() => {
    setupGiphy();
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <NavigationContainer>
              <AppProvider>
                <MainNavigation />
              </AppProvider>
            </NavigationContainer>
          </PersistGate>
        </Provider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
