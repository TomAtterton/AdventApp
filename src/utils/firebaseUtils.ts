import firestore from '@react-native-firebase/firestore';
import { advent } from '../config/adventConfig';

const calendarsCollection = firestore().collection('calendars');
const infoCollection = firestore().collection('info');

export const fetchCalendars = async () => {
  // const calendars = await calendarsCollection.get();
  // console.log(
  //   'calendars',
  //   calendars.docs.map(doc => ({ id: doc.id, ...doc.data() })),
  // );
  // return calendars.docs.map(doc => doc.data());
};

const arrayToObject = <T extends Record<K, any>, K extends keyof any>(
  array: T[] = [],
  getKey: (item: T) => K,
) =>
  array.reduce((obj, cur) => {
    const key = getKey(cur);
    return { ...obj, [key]: cur };
  }, {} as Record<K, T>);

export const addCalendar = async ({
  id,
  name,
  advent,
}: {
  id: string;
  name: string;
  advent: advent[];
}) => {
  try {
    const adventObject = arrayToObject(advent, item => `${item.day - 1}`);
    // console.log('adventObject', adventObject);
    await calendarsCollection.doc(id).set(adventObject);
    await infoCollection.doc(id).set({ name });

  } catch (e) {
    console.log('error something went wrong', e);
  }
};

export const updateCalendar = ({
  id,
  day,
  message,
  type,
  value,
}: {
  id: string;
  day: number;
  message: string;
  type: string;
  value: string;
}) => {
  return calendarsCollection.doc(id).update({
    [day - 1]: {
      day,
      message,
      type,
      value,
    },
  });
};
