import { GiphySDK } from '@giphy/react-native-sdk';

// TODO don't store this in git
const GIPHY_KEY = 'TDL5dA48EQETx5y2hA7Auqbcs8ZN2Loa';

export const setupGiphy = () => {
  GiphySDK.configure({
    apiKey: GIPHY_KEY, // iOS SDK key
  });
};
