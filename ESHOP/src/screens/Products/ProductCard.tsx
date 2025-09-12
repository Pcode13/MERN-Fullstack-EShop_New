import React, { FC } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Product } from '../types/Product';

const { width } = Dimensions.get('window');

interface ProductCardProps {
  product: Product;
  onPress?: (product: Product) => void;
}

const ProductCard: FC<ProductCardProps> = ({ product, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.8}
      onPress={() => onPress && onPress(product)}
    >
      <Image
        source={{
          uri: product.image
            ? product.image
            : 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png',
        }}
        style={styles.image}
      />
      <Text style={styles.name} numberOfLines={1}>
        {product.name}
      </Text>
      <Text style={styles.price}>${product.price.toFixed(2)}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: width / 2 - 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    margin: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 120,
    borderRadius: 8,
    marginBottom: 8,
  },
  name: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center',
  },
  price: {
    fontSize: 14,
    fontWeight: '500',
    color: '#e63946',
    marginTop: 4,
  },
});

export default ProductCard;
