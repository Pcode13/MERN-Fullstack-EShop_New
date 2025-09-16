import EncryptedStorage from 'react-native-encrypted-storage';

const TOKEN_KEY = 'jwt_token';
const USER_KEY = 'user_data';

export const storeEncryptedToken = async (token: string, userData: any) => {
  try {
    await EncryptedStorage.setItem(TOKEN_KEY, token);
    await EncryptedStorage.setItem(USER_KEY, JSON.stringify(userData));
  } catch (error) {
    console.error('Error storing encrypted token:', error);
  }
};

export const getEncryptedToken = async () => {
  try {
    const token = await EncryptedStorage.getItem(TOKEN_KEY);
    const userData = await EncryptedStorage.getItem(USER_KEY);
    
    if (token && userData) {
      return {
        token,
        user: JSON.parse(userData)
      };
    }
    return null;
  } catch (error) {
    console.error('Error getting encrypted token:', error);
    return null;
  }
};

export const clearEncryptedToken = async () => {
  try {
    await EncryptedStorage.removeItem(TOKEN_KEY);
    await EncryptedStorage.removeItem(USER_KEY);
  } catch (error) {
    console.error('Error clearing encrypted token:', error);
  }
};