import React from 'react';
import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Pages from '../enum/Pages';
import routes from './routes';

const Stack = createNativeStackNavigator();

enableScreens();

const defaultOptions = {
  headerShown: false,
};

const MainNavigation = () => (
  // @ts-ignore
  <Stack.Navigator initialRouteName={Pages.HOME} screenOptions={{ presentation: 'modal' }}>
    <Stack.Screen
      name={Pages.HOME}
      component={routes[Pages.HOME]}
      options={{ ...defaultOptions }}
    />
    <Stack.Screen
      name={Pages.DETAILS}
      component={routes[Pages.DETAILS]}
      options={{ ...defaultOptions }}
    />
    <Stack.Screen
      name={Pages.SETTINGS}
      component={routes[Pages.SETTINGS]}
      options={{ ...defaultOptions }}
    />
  </Stack.Navigator>
);

export default MainNavigation;
