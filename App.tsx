import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './src/navigation';
import { Provider } from 'react-redux';
import { persistor, store } from './src/store';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { PersistGate } from 'redux-persist/integration/react';
import { GiphySDK } from '@giphy/react-native-sdk';


const GIPHY_KEY = 'TDL5dA48EQETx5y2hA7Auqbcs8ZN2Loa';
// TODO - move this to a config file
GiphySDK.configure({
  apiKey: GIPHY_KEY, // iOS SDK key
});


export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <NavigationContainer>
              <MainNavigation />
            </NavigationContainer>
          </PersistGate>
        </Provider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
