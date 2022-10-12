import React from 'react';
import { Button, Text } from 'react-native';
import styles from './createCalendar.style';
import AdventList from '../../components/AdventList/AdventList';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAppSelector } from '../../utils/hooks';

interface Props {
  navigation: any;
  route: {
    params: {
      id: string;
      name: string;
    };
  };
}

const CreateCalendar = ({ navigation, route }: Props) => {
  const {
    params: { id, name },
  } = route || {};

  const currentCalendar = useAppSelector(state => state.calendar.createdCalendars[id]?.data || []);
  console.log('Current calendar', currentCalendar);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ textAlign: 'center', fontSize: 30 }}>{name}</Text>
      <AdventList data={currentCalendar} id={id} />
    </SafeAreaView>
  );
};

export default CreateCalendar;
