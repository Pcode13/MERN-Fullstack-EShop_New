import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from '../../components/CustomButton';

const SingleProduct = ({ route }) => {
  const { productId } = route.params;
  console.log('Product ID:', productId);
  const onAddToCart = () => {
    console.log(`Add product ${productId} to cart`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Single Product Screen</Text>
      <CustomButton title="Add" onPress={onAddToCart} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SingleProduct;
