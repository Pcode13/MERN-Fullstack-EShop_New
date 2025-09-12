import { Platform } from 'react-native';

const VERSION_21_API_LEVEL = 21; // Lollipop (5.0)

export const isAndroidFullScreenMode = () => {
  return Platform.OS === 'android' && Platform.Version >= VERSION_21_API_LEVEL;
};
