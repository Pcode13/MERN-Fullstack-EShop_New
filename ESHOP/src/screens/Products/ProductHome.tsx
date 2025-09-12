import React, { FC, useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ProductCard from './ProductCard';
import { Product } from '../../types/shop';
import ProductsData from '../../dummyJson/products.json';
import Header from '../../components/Header';

const productsData = ProductsData as unknown as Product[];

const ProductHome: FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(productsData as Product[]);
  }, []);

  return (
    <View style={styles.container}>
      <Header title="E-Shop" />
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onPress={p => console.log('Clicked:', p.name)}
          />
        )}
        keyExtractor={item => item._id}
        numColumns={2}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  list: {
    padding: 10,
  },
});

export default ProductHome;
