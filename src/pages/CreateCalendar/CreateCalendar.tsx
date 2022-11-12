import React from 'react';
import { Text } from 'react-native';
import styles from './createCalendar.style';
import AdventList from '../../components/AdventList/AdventList';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAppSelector } from '../../utils/hooks';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/Button';

interface Props {
  route: {
    params: {
      id: string;
      name: string;
    };
  };
}

const CreateCalendar = ({ route }: Props) => {
  const {
    params: { id, name },
  } = route || {};

  const currentCalendar = useAppSelector(state => state.calendar.createdCalendars[id]?.data || []);
  const { goBack } = useNavigation();
  const { top } = useSafeAreaInsets();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ textAlign: 'center', fontSize: 30 }}>{name}</Text>
      <AdventList data={currentCalendar} id={id} isCreating={true} />

      <Button style={[{ top: top, position: 'absolute', left: 16 }]} onPress={() => goBack()}>
        <Ionicons name="chevron-back" size={32} color="white" />
      </Button>
    </SafeAreaView>
  );
};

export default CreateCalendar;
