import React, { FC } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';
import { Product } from '../../types/shop';

interface Props {
  productsFiltered: Product[];
}

const SearchProduct: FC<Props> = ({ productsFiltered }) => {
  if (productsFiltered.length === 0) {
    return (
      <View style={styles.empty}>
        <Text>No products found</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={productsFiltered}
      keyExtractor={(item, index) => item._id?.toString() || index.toString()}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.desc}>{item.description}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  empty: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  card: {
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2, // shadow on Android
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 }, // shadow on iOS
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  desc: {
    fontSize: 14,
    color: '#666',
  },
});

export default SearchProduct;
