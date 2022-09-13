import React from 'react';
import styles from './home.style';
import AdventList from '../../components/AdventList/AdventList';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import Pages from '../../enum/Pages';
import { useAppSelector } from '../../utils/hooks';
import { defaultAdvent } from '../../config/adventConfig';

const Home = ({}) => {
  const navigation = useNavigation();
  const currentCalendar = useAppSelector(state => state.calendar.currentCalendar || defaultAdvent);
  return (
    <SafeAreaView style={styles.container}>
      <Button style={styles.settings} onPress={() => navigation.navigate({ name: Pages.SETTINGS })}>
        <Ionicons name="ios-settings-sharp" size={32} color="white" />
      </Button>

      <AdventList data={currentCalendar} />
    </SafeAreaView>
  );
};

export default Home;
