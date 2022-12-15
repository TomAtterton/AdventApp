import React from 'react';
import { enableScreens } from 'react-native-screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Pages from '../enum/Pages';
import routes from './routes';
import Button from '../components/Button';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../themes';

const Stack = createNativeStackNavigator();

enableScreens();

const defaultOptions = {
  headerStyle: {
    backgroundColor: colors.homeBackground,
  },
  headerShadowVisible: false,
  headerShown: false,
};

const MainNavigation = () => {
  const { navigate } = useNavigation();
  return (
    // @ts-ignore
    <Stack.Navigator initialRouteName={Pages.HOME}>
      <Stack.Screen
        name={Pages.HOME}
        component={routes[Pages.HOME]}
        options={{
          ...defaultOptions,
          title: '',
          headerRight: navigation => {
            console.log('navigation', navigation);
            return (
              <Button onPress={() => {}}>
                <Ionicons name="ios-settings-sharp" size={32} color="white" />
              </Button>
            );
          },
        }}
      />
      <Stack.Screen
        name={Pages.DETAILS}
        component={routes[Pages.DETAILS]}
        options={{
          animation: 'fade',
          ...defaultOptions,
        }}
      />
      <Stack.Screen
        name={Pages.EDIT_DETAILS}
        component={routes[Pages.EDIT_DETAILS]}
        options={{ ...defaultOptions }}
      />
      <Stack.Screen
        name={Pages.SETTINGS}
        component={routes[Pages.SETTINGS]}
        options={{
          ...defaultOptions,
          title: 'Settings',
        }}
      />
      <Stack.Screen
        name={Pages.CREATE_CALENDAR}
        component={routes[Pages.CREATE_CALENDAR]}
        options={{ ...defaultOptions, title: 'Edit Calendar' }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;
