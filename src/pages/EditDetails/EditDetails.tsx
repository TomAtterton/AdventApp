import React, {memo, useCallback, useMemo, useEffect, useState} from 'react';
import styles from './editDetails.style';
import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import {BlurView} from 'expo-blur';
import {
  GiphyDialog,
  GiphyDialogEvent,
  GiphyMedia,
} from '@giphy/react-native-sdk';
import * as ImagePicker from 'react-native-image-picker';
import {metrics} from '../../themes';
import {useAppDispatch} from '../../utils/hooks';
import {onUpdateCalendarItem} from '../../store/calendarSlice';
import {useNavigation} from '@react-navigation/native';
import Button from '../../components/Button';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ContentButton} from '../../components/Button/ContentButton';
import {CONTENT_TYPE} from '../../store/types';

const options = {
  maxHeight: Dimensions.get('window').height,
  maxWidth: Dimensions.get('window').width,
  selectionLimit: 1,
  mediaType: 'photo',
  includeBase64: true,
};

type ContentType = {url?: string; type: CONTENT_TYPE; base64?: string};

interface Props {
  route: {
    params: {
      id: string;
      title: number;
      message: string;
      value: string;
      type: CONTENT_TYPE;
    };
  };
}

const EditDetails = ({
  route: {
    params: {id, title, message, value, type},
  },
}: Props) => {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();
  //
  const [showPreview, setShowPreview] = useState<boolean>(false);

  const [media, setMedia] = useState<ContentType | null>(
    value
      ? {
          type,
          url: type === CONTENT_TYPE.GIF ? value : undefined,
          base64: type === CONTENT_TYPE.IMAGE ? value : undefined,
        }
      : null,
  );
  const [text, onChangeText] = useState<string>(message || 'Useless Text');
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handler = (e: any) => {
      const giphyMedia = e.media as GiphyMedia;
      console.log('GiphyMedia', giphyMedia);
      setMedia({url: giphyMedia.url, type: CONTENT_TYPE.GIF});
      GiphyDialog.hide();
    };
    const listener = GiphyDialog.addListener(
      GiphyDialogEvent.MediaSelected,
      handler,
    );
    return () => {
      listener.remove();
    };
  }, []);

  // TODO support at a later time
  // const onChooseImage = useCallback(async () => {
  //   const response = await ImagePicker.launchImageLibrary(options);
  //   const initialAsset = response?.assets?.[0];
  //   setMedia({ url: initialAsset?.uri, type: CONTENT_TYPE.IMAGE, base64: initialAsset?.base64 });
  // }, []);

  const onSave = useCallback(() => {
    if (media) {
      dispatch(
        onUpdateCalendarItem({
          id,
          day: title,
          type: media.type,
          value: media.type === CONTENT_TYPE.GIF ? media.url : media.base64,
          message: text,
        }),
      );
      navigation.goBack();
    }
  }, [media, text, id, title, dispatch, navigation]);

  const onRemove = useCallback(() => {
    dispatch(
      onUpdateCalendarItem({
        id,
        day: title,
        type: null,
        value: null,
        message: null,
      }),
    );
    setMedia(null);
  }, [media, text, id, title, dispatch, navigation]);

  const imageSource = useMemo(() => {
    return (media?.type || type) === CONTENT_TYPE.GIF
      ? {uri: media?.url || media?.uri}
      : {uri: `data:image/jpeg;base64, ${media?.base64}`};
  }, [media?.url, type]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.container}>
        {showPreview && media ? (
          <View style={styles.container}>
            <Image style={styles.image} source={imageSource} />
            <BlurView style={styles.messageContainer}>
              <Text style={styles.message}>{text}</Text>
            </BlurView>
            <TouchableOpacity
              style={{top: top + 16, position: 'absolute', right: 16}}
              onPress={() => setShowPreview(false)}>
              <Ionicons name="close" size={32} color="white" />
            </TouchableOpacity>
          </View>
        ) : (
          <>
            {media ? (
              <View
                style={{flex: 1, paddingTop: top + 80, marginHorizontal: 24}}>
                <Image
                  style={{
                    alignSelf: 'center',
                    height: metrics.screenHeight / 3,
                    width: metrics.screenWidth / 1.5,
                  }}
                  source={imageSource}
                />
                <ContentButton title={'Remove Content'} onPress={onRemove} />
                <Text>Add message </Text>
                <TextInput
                  style={{backgroundColor: 'white', height: 40, paddingLeft: 8}}
                  value={text}
                  onChangeText={onChangeText}
                />
                <ContentButton
                  title={'Show Preview'}
                  onPress={() => setShowPreview(true)}
                />
                <ContentButton title={'Save'} onPress={onSave} />
              </View>
            ) : (
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  marginHorizontal: 24,
                }}>
                {/*<ContentButton title={'Choose Image'} onPress={onChooseImage} />*/}
                <ContentButton
                  title={'Select Gif'}
                  onPress={GiphyDialog.show}
                />
              </View>
            )}
            <Button
              style={{top: top, position: 'absolute', left: 16}}
              onPress={() => navigation.goBack()}>
              <Ionicons name="chevron-back" size={32} color="white" />
            </Button>
          </>
        )}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default memo(EditDetails);
