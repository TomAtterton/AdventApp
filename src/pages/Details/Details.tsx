import React from 'react';
import styles from './details.style';
import { Image, Text, View } from 'react-native';
import { BlurView } from 'expo-blur';

interface Props {
  route: {
    params: {
      title: string;
      message: string;
      gif: string;
    };
  };
}

const testDuck =
  'https://media.istockphoto.com/photos/mallard-duck-on-white-background-picture-id464988959';
const testGif = 'https://media.giphy.com/media/BzyTuYCmvSORqs1ABM/giphy.gif';

const Details = ({
  route: {
    params: { title, message, gif = 'https://media.giphy.com/media/BzyTuYCmvSORqs1ABM/giphy.gif' },
  },
}: Props) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: testGif }} />
      <Text style={styles.title}>{title}</Text>
      <BlurView style={styles.messageContainer}>
        <Text style={styles.message}>{message}</Text>
      </BlurView>
    </View>
  );
};

export default Details;
