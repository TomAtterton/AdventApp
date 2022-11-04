import React from 'react';
import styles from './home.style';
import AdventList from '../../components/AdventList/AdventList';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppSelector } from '../../utils/hooks';
import { defaultAdvent } from '../../config/adventConfig';
import SnowFall from '../../components/SnowFall/SnowFall';

const Home = ({}) => {
  const currentCalendar = useAppSelector(state => state.calendar.currentCalendar || defaultAdvent);
  return (
    <SafeAreaView style={styles.container}>
      <SnowFall />
      <AdventList data={currentCalendar} />
    </SafeAreaView>
  );
};

export default Home;
