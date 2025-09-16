import { axiosPost } from './axios';
import { endpoints } from '../common/baseURL';

interface LoginData {
  email: string;
  password: string;
}

interface RegisterData {
  name: string;
  email: string;
  password: string;
  phone?: string;
}

interface AuthResponse {
  user: {
    id: string;
    name: string;
    email: string;
    isAdmin: boolean;
  };
  token: string;
}

interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}

// Login
export const loginUser = async (loginData: LoginData): Promise<ApiResponse<AuthResponse | null>> => {
  try {
    const response = await axiosPost<AuthResponse>(endpoints.login, loginData);
    
    if (response && response.status === 200) {
      return {
        data: response.data,
        status: response.status,
      };
    }
    
    throw new Error('Login failed');
  } catch (error) {
    console.error('Error logging in:', error);
    return {
      data: null,
      status: 401,
      message: 'Invalid credentials',
    };
  }
};

// Register
export const registerUser = async (registerData: RegisterData): Promise<ApiResponse<AuthResponse | null>> => {
  try {
    console.log('Register Data:', registerData);
    console.log('Register URL:', endpoints.register);
    const response = await axiosPost<AuthResponse>(endpoints.register, registerData);
    
    if (response && (response.status === 201 || response.status === 200)) {
      return {
        data: response.data,
        status: response.status,
      };
    }
    
    throw new Error('Registration failed');
  } catch (error: any) {
    console.error('Registration Error:', error);
    const errorMessage = error?.response?.data?.message || error?.data?.message || 'Registration failed';
    return {
      data: null,
      status: error?.response?.status || error?.status || 400,
      message: errorMessage,
    };
  }
};