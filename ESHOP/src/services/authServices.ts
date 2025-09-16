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
    const response = await axiosPost<AuthResponse>(endpoints.register, registerData);
    
    if (response && response.status === 201) {
      return {
        data: response.data,
        status: response.status,
      };
    }
    
    throw new Error('Registration failed');
  } catch (error) {
    console.error('Error registering:', error);
    return {
      data: null,
      status: 400,
      message: 'Registration failed',
    };
  }
};