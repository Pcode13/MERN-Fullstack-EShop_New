import { axiosGet } from './axios';
import { endpoints } from '../common/baseURL';

interface Category {
  _id: string;
  name: string;
}

interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}

// Get all categories
export const getAllCategories = async (): Promise<ApiResponse<Category[]>> => {
  try {
    const response = await axiosGet<Category[]>(endpoints.categories);
    
    if (response && response.status === 200) {
      return {
        data: response.data,
        status: response.status,
      };
    }
    
    throw new Error('Failed to fetch categories');
  } catch (error) {
    console.error('Error fetching categories:', error);
    return {
      data: [],
      status: 500,
      message: 'Failed to fetch categories',
    };
  }
};