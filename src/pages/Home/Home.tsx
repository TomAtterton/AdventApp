import React from 'react';
import styles from './home.style';
import AdventList from '../../components/AdventList/AdventList';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAppSelector } from '../../utils/hooks';
import { defaultAdvent } from '../../config/adventConfig';
import SnowFall from '../../components/SnowFall/SnowFall';
import { Image, StatusBar, View } from 'react-native';
import { BlurView } from 'expo-blur';

const Home = ({}) => {
  const currentCalendar = useAppSelector(state => state.calendar.currentCalendar || defaultAdvent);
  const { top } = useSafeAreaInsets();
  return (
    <View style={[styles.container, { paddingTop: 0 }]}>
      <StatusBar barStyle={'light-content'} />
      <Image
        source={require('../../assets/images/snow_mountain.png')}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          width: '100%',
          height: '100%',
        }}
      />
      <BlurView
        tint={'dark'}
        intensity={20}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          width: '100%',
          height: '100%',
        }}></BlurView>
      <SnowFall />
      <AdventList style={{ paddingTop: top }} data={currentCalendar} />
    </View>
  );
};

export default Home;
