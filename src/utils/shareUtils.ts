import RNShare from 'react-native-share';
import { createFile } from './fileUtils';

export const onShareFile = async (value: {}) => {
  try {
    const url = await createFile({ title: 'test', value });

    RNShare.open({
      subject: 'Share calendar',
      title: 'test',
      message: `Share this calendar`,
      type: 'text/plain',
      url,
    });
  } catch (e) {
    console.log(e);
  }
};
