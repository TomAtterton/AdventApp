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
import SnowFall from '../../components/SnowFall/SnowFall';

const Home = ({}) => {
  const currentCalendar = useAppSelector(state => state.calendar.currentCalendar || defaultAdvent);
  const { top } = useSafeAreaInsets();
  const { navigate } = useNavigation();
  const onNavigateToSettings = () => navigate({ name: Pages.SETTINGS });

  const adventListTopPadding = top + BUTTON_HEIGHT;

  return (
    <View style={[styles.container, { paddingTop: 0 }]}>
      <StatusBar barStyle={'light-content'} />
      <Image
        source={require('../../assets/images/night_lake.jpg')}
        style={styles.backgroundImage}
      />
      <BlurView tint={'dark'} intensity={20} style={styles.blurView}></BlurView>
      <SnowFall />
      <Button style={[styles.settingsButton, { top: top }]} onPress={onNavigateToSettings}>
        <Ionicons name="ios-settings-sharp" size={32} color="white" />
      </Button>
      <AdventList style={{ paddingTop: adventListTopPadding }} data={currentCalendar} />
    </View>
  );
};

export default Home;
