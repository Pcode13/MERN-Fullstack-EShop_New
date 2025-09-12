import React, { FC } from 'react';
import { View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Product } from '../../types/shop';
import ProductCard from './ProductCard';

interface ProductListProps {
  product: Product;
  onPress?: (product: Product) => void;
}
const { width } = Dimensions.get('window');
const ProductList: FC<ProductListProps> = ({ product, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.card, { width: '50%' }]}
      activeOpacity={0.8}
      onPress={() => onPress && onPress(product)}
    >
      <View style={{ width: width / 2 }}>
        <ProductCard product={product} onPress={onPress} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    marginBottom: 12,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 8,
    marginRight: 12,
  },
  details: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222',
  },
  brand: {
    fontSize: 13,
    color: '#555',
    marginTop: 2,
  },
  price: {
    fontSize: 14,
    color: '#e63946',
    marginTop: 4,
    fontWeight: '500',
  },
});

export default ProductList;
