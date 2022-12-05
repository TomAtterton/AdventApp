import React, { useEffect, useState } from 'react';
import styles, { BUTTON_HEIGHT } from './home.style';
import AdventList from '../../components/AdventList/AdventList';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAppSelector } from '../../utils/hooks';
import { defaultAdvent } from '../../config/adventConfig';
import { Image, StatusBar, View } from 'react-native';
import { BlurView } from 'expo-blur';
import Button from '../../components/Button';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import SnowFall from '../../components/SnowFall/SnowFall';
import { images } from '../../themes';
import notifee, { RepeatFrequency, TimestampTrigger, TriggerType } from '@notifee/react-native';
import Pages from '../../enum/Pages';

const Home = ({}) => {
  const currentCalendar = useAppSelector(state => state.calendar.currentCalendar || defaultAdvent);
  const { top } = useSafeAreaInsets();
  const navigation = useNavigation();
  const onNavigateToSettings = () => navigation.navigate({ name: Pages.SETTINGS });

  // TODO - this is a hack to get the notification to show up on iOS
  useEffect(() => {
    const setNotification = async () => {
      await notifee.requestPermission();
      const date = new Date();
      date.setDate(date.getDate() + 1);
      date.setHours(10);
      date.setMinutes(0);

      const trigger: TimestampTrigger = {
        type: TriggerType.TIMESTAMP,
        timestamp: date.getTime(),
        repeatFrequency: RepeatFrequency.DAILY,
      };

      notifee.createTriggerNotification(
        {
          title: 'Advent Calendar',
          body: 'Open the app to see what is behind the door',
        },
        trigger,
      );
    };

    setNotification();
  }, []);

  const adventListTopPadding = top + BUTTON_HEIGHT;
  const [image, setImage] = useState(images.BACKGROUND_EVENING);

  useFocusEffect(() => {
    const date = new Date();
    const hours = date.getHours();
    if (hours >= 6 && hours < 10) {
      setImage(images.BACKGROUND_MORNING);
    } else if (hours >= 11 && hours < 16) {
      setImage(images.BACKGROUND_DAY);
    } else if (hours >= 16 && hours < 20) {
      setImage(images.BACKGROUND_AFTERNOON);
    } else {
      setImage(images.BACKGROUND_EVENING);
    }
  });

  // change image based on time of day

  return (
    <View style={[styles.container, { paddingTop: 0 }]}>
      <StatusBar barStyle={'light-content'} />
      <Image source={image} style={styles.backgroundImage} />

      <BlurView tint={'dark'} intensity={20} style={styles.blurView} />
      <SnowFall />
      <Button style={[styles.settingsButton, { top }]} onPress={onNavigateToSettings}>
        <Ionicons name="ios-settings-sharp" size={32} color="red" />
      </Button>
      <AdventList style={{ paddingTop: adventListTopPadding }} data={currentCalendar} />
    </View>
  );
};

export default Home;
