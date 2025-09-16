import { axiosGet } from './axios';
import { endpoints } from '../common/baseURL';
import { Product } from '../types/shop';

interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}

// Get all products
export const getAllProducts = async (): Promise<ApiResponse<Product[]>> => {
  try {
    const response = await axiosGet<Product[]>(endpoints.products);
    
    if (response && response.status === 200) {
      return {
        data: response.data,
        status: response.status,
      };
    }
    
    throw new Error('Failed to fetch products');
  } catch (error) {
    console.error('Error fetching products:', error);
    return {
      data: [],
      status: 500,
      message: 'Failed to fetch products',
    };
  }
};

// Get product by ID
export const getProductById = async (id: string): Promise<ApiResponse<Product | null>> => {
  try {
    const response = await axiosGet<Product>(endpoints.productById(id));
    
    if (response && response.status === 200) {
      return {
        data: response.data,
        status: response.status,
      };
    }
    
    throw new Error('Product not found');
  } catch (error) {
    console.error('Error fetching product:', error);
    return {
      data: null,
      status: 404,
      message: 'Product not found',
    };
  }
};

// Get products by category
export const getProductsByCategory = async (categoryId: string): Promise<ApiResponse<Product[]>> => {
  try {
    const response = await axiosGet<Product[]>(endpoints.productsByCategory(categoryId));
    
    if (response && response.status === 200) {
      return {
        data: response.data,
        status: response.status,
      };
    }
    
    throw new Error('Failed to fetch products by category');
  } catch (error) {
    console.error('Error fetching products by category:', error);
    return {
      data: [],
      status: 500,
      message: 'Failed to fetch products by category',
    };
  }
};

// Search products
export const searchProducts = async (query: string): Promise<ApiResponse<Product[]>> => {
  try {
    const response = await axiosGet<Product[]>(endpoints.searchProducts(query));
    
    if (response && response.status === 200) {
      return {
        data: response.data,
        status: response.status,
      };
    }
    
    throw new Error('Search failed');
  } catch (error) {
    console.error('Error searching products:', error);
    return {
      data: [],
      status: 500,
      message: 'Search failed',
    };
  }
};