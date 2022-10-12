import { CONTENT_TYPE } from '../pages/EditDetails/EditDetails';

export type advent = {
  day: number;
  message: string;
  value?: string | null;
  type?: CONTENT_TYPE;
};

export const emptyAdvent: advent[] = new Array(24)
  .fill(0)
  .map((_, i) => ({ day: i + 1, message: '', value: null }));

export const defaultAdvent: advent[] = new Array(24).fill(0).map((_, i) => ({
  day: i + 1,
  message: `Day ${i.toLocaleString()} Message`,
  type: CONTENT_TYPE.GIF,
  value: undefined,
}));
