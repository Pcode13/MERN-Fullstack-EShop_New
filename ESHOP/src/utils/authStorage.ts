import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeAuthData = async (token: string, user: any) => {
  try {
    await AsyncStorage.setItem('userToken', token);
    await AsyncStorage.setItem('userData', JSON.stringify(user));
  } catch (error) {
    console.error('Error storing auth data:', error);
  }
};

export const getAuthData = async () => {
  try {
    const token = await AsyncStorage.getItem('userToken');
    const userData = await AsyncStorage.getItem('userData');
    
    if (token && userData) {
      return {
        token,
        user: JSON.parse(userData)
      };
    }
    return null;
  } catch (error) {
    console.error('Error getting auth data:', error);
    return null;
  }
};

export const clearAuthData = async () => {
  try {
    await AsyncStorage.removeItem('userToken');
    await AsyncStorage.removeItem('userData');
  } catch (error) {
    console.error('Error clearing auth data:', error);
  }
};