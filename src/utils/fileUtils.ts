import RNFS from 'react-native-fs';

export const createFile = async ({ title, value }: { title: string; value: {} }) => {
  const content = JSON.stringify(value);
  let path = RNFS.DocumentDirectoryPath + `/${title}.txt`;
  await RNFS.writeFile(path, content, 'utf8');
  return 'file://' + path;
};
