import { useState, useEffect } from 'react';
import { Product } from '../types/shop';
import { getProductById } from '../services/productServices';

export const useSingleProduct = (productId?: string) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchProduct = async (id: string) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await getProductById(id);
      if (response.status === 200) {
        setProduct(response.data);
      } else {
        setError(response.message || 'Product not found');
      }
    } catch (err) {
      setError('Network error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (productId) {
      fetchProduct(productId);
    }
  }, [productId]);

  return {
    product,
    loading,
    error,
    fetchProduct,
  };
};