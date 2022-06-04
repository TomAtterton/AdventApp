import React, { useState } from 'react';
import ScalableImage from 'react-native-scalable-image';
import styles, { IMAGE_HEIGHT, IMAGE_WIDTH } from './imageView.style';
import RNImageView from 'react-native-image-viewing';
import Button from '../Button';

interface Props {
  uri: string;
}

const ImageView = ({ uri }: Props) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  return (
    <>
      {!!uri && (
        <Button onPress={() => setIsVisible(true)}>
          <ScalableImage
            height={IMAGE_HEIGHT}
            width={IMAGE_WIDTH}
            style={[styles.image]}
            source={{ uri }}
          />
        </Button>
      )}
      <RNImageView
        images={[{ uri }]}
        imageIndex={0}
        visible={isVisible}
        onRequestClose={() => setIsVisible(false)}
      />
    </>
  );
};

export default ImageView;
