import React from 'react';
import styles from './home.style';
import adventConfig from '../../config/adventConfig';
import AdventList from '../../components/AdventList/AdventList';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import Pages from '../../enum/Pages';

const Home = ({}) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <Button style={styles.settings} onPress={() => navigation.navigate({ name: Pages.SETTINGS })}>
        <Ionicons name="ios-settings-sharp" size={32} color="white" />
      </Button>
      <AdventList data={adventConfig} />
    </SafeAreaView>
  );
};

export default Home;
