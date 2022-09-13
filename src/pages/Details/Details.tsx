import React from 'react';
import styles from './details.style';
import { Image, Text, View } from 'react-native';
import { BlurView } from 'expo-blur';
import { useNavigation } from '@react-navigation/native';
import { ContentButton } from '../EditDetails/EditDetails';

interface Props {
  route: {
    params: {
      title: string;
      message: string;
      value: string;
    };
  };
}

const Details = ({
  route: {
    params: {
      title,
      message,
      value = 'https://media.giphy.com/media/BzyTuYCmvSORqs1ABM/giphy.gif',
    },
  },
}: Props) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: value }} />
      <Text style={styles.title}>{title}</Text>
      <BlurView style={styles.messageContainer}>
        <Text style={styles.message}>{message}</Text>
      <ContentButton title={'Go Back'} onPress={navigation.goBack} />
      </BlurView>
    </View>
  );
};

export default Details;
