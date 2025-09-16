import * as Keychain from 'react-native-keychain';

const SERVICE_NAME = 'EShopApp';

export const storeSecureToken = async (token: string, userData: any) => {
  try {
    const credentials = {
      token,
      user: userData
    };
    await Keychain.setInternetCredentials(
      SERVICE_NAME,
      'auth_data',
      JSON.stringify(credentials)
    );
  } catch (error) {
    console.error('Error storing secure token:', error);
  }
};

export const getSecureToken = async () => {
  try {
    const credentials = await Keychain.getInternetCredentials(SERVICE_NAME);
    
    if (credentials) {
      const data = JSON.parse(credentials.password);
      return {
        token: data.token,
        user: data.user
      };
    }
    return null;
  } catch (error) {
    console.error('Error getting secure token:', error);
    return null;
  }
};

export const clearSecureToken = async () => {
  try {
    await Keychain.resetInternetCredentials(SERVICE_NAME);
  } catch (error) {
    console.error('Error clearing secure token:', error);
  }
};