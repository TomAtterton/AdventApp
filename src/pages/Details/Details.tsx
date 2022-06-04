import React from 'react';
import styles from './details.style';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Text } from 'react-native';
import ImageView from '../../components/ImageView';

interface Props {
  route: {
    params: {
      title: string;
      message: string;
      gif: string;
    };
  };
}

const Details = ({
  route: {
    params: { title, message, gif = 'https://media.giphy.com/media/BzyTuYCmvSORqs1ABM/giphy.gif' },
  },
}: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <ImageView uri={gif} />
      <Text style={styles.message}>{message}</Text>
    </SafeAreaView>
  );
};

export default Details;
