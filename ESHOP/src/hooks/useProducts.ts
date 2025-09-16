import { useState, useEffect } from 'react';
import { Product } from '../types/shop';
import { getAllProducts, getProductsByCategory, searchProducts } from '../services/productServices';

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await getAllProducts();
      if (response.status === 200) {
        setProducts(response.data);
      } else {
        setError(response.message || 'Failed to fetch products');
      }
    } catch (err) {
      setError('Network error');
    } finally {
      setLoading(false);
    }
  };

  const fetchProductsByCategory = async (categoryId: string) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await getProductsByCategory(categoryId);
      if (response.status === 200) {
        setProducts(response.data);
      } else {
        setError(response.message || 'Failed to fetch products');
      }
    } catch (err) {
      setError('Network error');
    } finally {
      setLoading(false);
    }
  };

  const searchProductsQuery = async (query: string) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await searchProducts(query);
      if (response.status === 200) {
        setProducts(response.data);
      } else {
        setError(response.message || 'Search failed');
      }
    } catch (err) {
      setError('Network error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return {
    products,
    loading,
    error,
    fetchProducts,
    fetchProductsByCategory,
    searchProductsQuery,
  };
};