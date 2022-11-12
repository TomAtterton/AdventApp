import React from 'react';
import styles, { BUTTON_HEIGHT } from './home.style';
import AdventList from '../../components/AdventList/AdventList';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAppSelector } from '../../utils/hooks';
import { defaultAdvent } from '../../config/adventConfig';
import { Image, StatusBar, View } from 'react-native';
import { BlurView } from 'expo-blur';
import Button from '../../components/Button';
import Pages from '../../enum/Pages';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
//TODO fix snow not working
import SnowFall from '../../components/SnowFall/SnowFall';

const Home = ({}) => {
  const currentCalendar = useAppSelector(state => state.calendar.currentCalendar || defaultAdvent);
  const { top } = useSafeAreaInsets();
  const { navigate } = useNavigation();
  const onNavigateToSettings = () => navigate({ name: Pages.SETTINGS });
  return (
    <View style={[styles.container, { paddingTop: 0 }]}>
      <StatusBar barStyle={'light-content'} />
      <Image
        source={require('../../assets/images/snow_mountain.png')}
        style={styles.backgroundImage}
      />
      <BlurView tint={'dark'} intensity={20} style={styles.blurView}></BlurView>
      {/*<SnowFall />*/}
      <Button style={[styles.settingsButton, { top: top }]} onPress={onNavigateToSettings}>
        <Ionicons name="ios-settings-sharp" size={32} color="white" />
      </Button>
      <AdventList style={{ paddingTop: top + BUTTON_HEIGHT }} data={currentCalendar} />
    </View>
  );
};

export default Home;
