import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { addToCart } from '../../redux/cartSlice';
import { useSingleProduct } from '../../hooks/useSingleProduct';
import Header from '../../components/Header';
import Page from '../../ui/Page';

const SingleProduct = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const { productId } = route.params || {};
  const { product, loading, error } = useSingleProduct(productId);

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart(product));
      alert('Added to cart!');
    }
  };

  if (loading) {
    return (
      <Page>
        <Header title="Product Details" />
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#000" />
          <Text>Loading product...</Text>
        </View>
      </Page>
    );
  }

  if (error || !product) {
    return (
      <Page>
        <Header title="Product Details" />
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error || 'Product not found'}</Text>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.backButtonText}>Go Back</Text>
          </TouchableOpacity>
        </View>
      </Page>
    );
  }

  return (
    <Page>
      <Header title={product.name} />
      <ScrollView style={styles.container}>
        <Image
          source={{
            uri: product.image || 'https://cdn.pixabay.com/photo/2012/04/01/17/29/box-23649_960_720.png'
          }}
          style={styles.productImage}
        />
        
        <View style={styles.productInfo}>
          <Text style={styles.productName}>{product.name}</Text>
          <Text style={styles.productPrice}>${product.price.toFixed(2)}</Text>
          
          <View style={styles.ratingContainer}>
            <Text style={styles.rating}>⭐ {product.rating}</Text>
            <Text style={styles.reviews}>({product.numReviews} reviews)</Text>
          </View>
          
          <Text style={styles.brand}>Brand: {product.brand}</Text>
          <Text style={styles.category}>Category: {product.category}</Text>
          
          <View style={styles.stockContainer}>
            <Text style={[
              styles.stock,
              product.countInStock > 0 ? styles.inStock : styles.outOfStock
            ]}>
              {product.countInStock > 0 ? `In Stock (${product.countInStock})` : 'Out of Stock'}
            </Text>
          </View>
          
          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>
      
      <View style={styles.footer}>
        <TouchableOpacity
          style={[
            styles.addToCartButton,
            product.countInStock === 0 && styles.disabledButton
          ]}
          onPress={handleAddToCart}
          disabled={product.countInStock === 0}
        >
          <Text style={styles.addToCartText}>
            {product.countInStock === 0 ? 'Out of Stock' : 'Add to Cart'}
          </Text>
        </TouchableOpacity>
      </View>
    </Page>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  backButton: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 8,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  productImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
  },
  productInfo: {
    padding: 20,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#e63946',
    marginBottom: 15,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  rating: {
    fontSize: 16,
    marginRight: 10,
  },
  reviews: {
    fontSize: 14,
    color: '#666',
  },
  brand: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  category: {
    fontSize: 16,
    color: '#666',
    marginBottom: 15,
  },
  stockContainer: {
    marginBottom: 20,
  },
  stock: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  inStock: {
    color: '#4CAF50',
  },
  outOfStock: {
    color: '#e63946',
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#666',
  },
  footer: {
    padding: 20,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  addToCartButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  addToCartText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SingleProduct;
